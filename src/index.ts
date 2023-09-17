import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

async function generateFunctionsFile(filename: string, statements: any[], outputDir: string) {
  const content = `import { graphql } from "@/gql"; \r\n` + statements.join("\r\n // prettier-ignore \r\n");
  await fsPromises.writeFile(path.join(outputDir, filename), content);
}

export default async function main(gqlInDir = './in/', outputDir = './generated/') {
  const args = process.argv.slice(2);
  let params: { [key: string]: string } = {
    gqlInDir: '',
    outputDir: '',
  };

  // Parse command-line arguments
  for (const arg of args) {
    const [key, value] = arg.split('=');
    if (key.includes('--')) {
      params[key.replace('--', '')] = value;
    }
  }

  // Resolve file paths
  params.gqlInDir = params.gqlInDir ? path.resolve(params.gqlInDir) : path.resolve(gqlInDir);
  params.outputDir = params.outputDir ? path.resolve(params.outputDir) : path.resolve(outputDir);

  if (!fs.existsSync(params.gqlInDir) || !fs.lstatSync(params.gqlInDir).isDirectory()) {
    console.error(`The folder ${params.gqlInDir} do not exist.`);
    process.exit(1);
  }
  const gqlFilePath = path.resolve(params.gqlInDir + '/gql.ts');
  const graphqlFilePath = path.resolve(params.gqlInDir + '/graphql.ts');
  if (!fs.existsSync(gqlFilePath) || !fs.existsSync(graphqlFilePath)) {
    console.error(`The folder ${params.gqlInDir} do not contain the file gql.ts or graphql.ts.`);
    process.exit(1);
  }

  // Check if outputDir exists, if not, create it
  if (!fs.existsSync(params.outputDir)) {
    fs.mkdirSync(params.outputDir);
  }

  let documents;
  const { exec } = require('child_process');
  exec('tsc ' + gqlFilePath, (error: { message: any; }, stdout: any, stderr: any) => {
    if (error) {
      console.error(`Error while compiling the files: ${error.message}`);
      process.exit(1);
    }
    if (stderr) {
      console.error(`Error while compiling the files: ${stderr}`);
      process.exit(1);
    }
    console.log(`Compiled TypeScript file: ${stdout}`);

    // Import the compiled JavaScript file
    const jsFilePath = gqlFilePath.replace('.ts', '.js');
    import(jsFilePath).then(async (module) => {
      const documents = module.documents;
      const fragments = [];
      const mutations = [];
      const queries = [];
      const subscriptions = [];

      for (const key of Object.keys(documents)) {
        const words = key.split(' ');
        const type = words[0];
        const name = words[1].split('(')[0];

        if (type === 'fragment') {
          fragments.push(`export const ${name} = graphql(/* GraphQL */ \`${key}\`);`);
        } else if (type === 'mutation') {
          mutations.push(`export const ${name} = graphql(/* GraphQL */ \`${key}\`);`);
        } else if (type === 'subscription') {
          subscriptions.push(`export const ${name} = graphql(/* GraphQL */ \`${key}\`);`);
        } else if (type === 'query') {
          queries.push(`export const ${name} = graphql(/* GraphQL */ \`${key}\`);`);
        }
      }

      try {
        await generateFunctionsFile('fragmentFunctions.ts', fragments, params.outputDir);
        await generateFunctionsFile('mutationFunctions.ts', mutations, params.outputDir);
        await generateFunctionsFile('queryFunctions.ts', queries, params.outputDir);
        await generateFunctionsFile('subscriptionFunctions.ts', subscriptions, params.outputDir);
      } catch (error: any) {
        console.error(`Error while writing to the files: ${error.message}`);
        process.exit(1);
      }
    }).catch((error) => {
      console.error(`Error while importing the file: ${error.message}`);
      process.exit(1);
    });
  });
}
main();
