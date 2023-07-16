import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

async function generateFunctionsFile(filename: string, statements: any[], outputDir: string) {
  const content = `import { graphql } from "@/gql"; \r\n` + statements.join("\r\n // prettier-ignore \r\n");
  await fsPromises.writeFile(path.join(outputDir, filename), content);
}

async function main() {
  const args = process.argv.slice(2);
  let params: { [key: string]: string } = {
    gqlFilePath: './src/gql.ts',
    graphqlFilePath: './src/graphql.ts',
    outputDir: './generated/',
  };

  // Parse command-line arguments
  for (const arg of args) {
    const [key, value] = arg.split('=');
    if (key in params) {
      params[key] = value;
    }
  }

  // Resolve file paths
  params.gqlFilePath = path.resolve(params.gqlFilePath);
  params.graphqlFilePath = path.resolve(params.graphqlFilePath);
  params.outputDir = path.resolve(params.outputDir);

  if (!fs.existsSync(params.gqlFilePath) || !fs.existsSync(params.graphqlFilePath)) {
    console.error(`The files ${params.gqlFilePath} or ${params.graphqlFilePath} do not exist.`);
    process.exit(1);
  }

  let documents;
  const { exec } = require('child_process');
  exec('tsc ' + params.gqlFilePath, (error: { message: any; }, stdout: any, stderr: any) => {
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
    const jsFilePath = params.gqlFilePath.replace('.ts', '.js');
    import(jsFilePath).then(async (module) => {
      const documents = module.documents;
      const fragments = [];
      const mutations = [];
      const queries = [];
    
      for (const key of Object.keys(documents)) {
        const words = key.split(' ');
        const type = words[0];
        const name = words[1].split('(')[0];
    
        if (type === 'fragment') {
          fragments.push(`export const ${name} = graphql(/* GraphQL */ \`${key}\`);`);
        } else if (type === 'mutation') {
          mutations.push(`export const ${name} = graphql(/* GraphQL */ \`${key}\`);`);
        } else if (type === 'query') {
          queries.push(`export const ${name} = graphql(/* GraphQL */ \`${key}\`);`);
        }
      }
    
      try {
        await generateFunctionsFile('fragmentFunctions.ts', fragments, params.outputDir);
        await generateFunctionsFile('mutationFunctions.ts', mutations, params.outputDir);
        await generateFunctionsFile('queryFunctions.ts', queries, params.outputDir);
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
