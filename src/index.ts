import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

async function generateFunctionsFile(filename: string, statements: any[], outputDir: string) {
  const content = `import { graphql } from "@/gql"; \r\n` + statements.join("\r\n // prettier-ignore \r\n");
  await fsPromises.writeFile(path.join(outputDir, filename), content);
}

export async function main(gqlFilePath = './build/gql.ts', graphqlFilePath = './build/graphql.ts', outputDir = './generated/') {
  const args = process.argv.slice(2);
  let params: { [key: string]: string } = {
    gqlFilePath: '',
    graphqlFilePath: '',
    outputDir: '',
  };

  // Parse command-line arguments
  for (const arg of args) {
    const [key, value] = arg.split('=');
    if(key.includes('--')) {
      params[key.replace('--', '')] = value;
    }
  }

  // Resolve file paths
  params.gqlFilePath = params.gqlFilePath ? path.resolve(params.gqlFilePath) : path.resolve(gqlFilePath);
  params.graphqlFilePath = params.graphqlFilePath ? path.resolve(params.graphqlFilePath) : path.resolve(graphqlFilePath);
  params.outputDir = params.outputDir ? path.resolve(params.outputDir) : path.resolve(outputDir);

  if (!fs.existsSync(params.gqlFilePath) || !fs.existsSync(params.graphqlFilePath)) {
    console.error(`The files ${params.gqlFilePath} or ${params.graphqlFilePath} do not exist.`);
    process.exit(1);
  }

  // Check if outputDir exists, if not, create it
  if (!fs.existsSync(params.outputDir)) {
    fs.mkdirSync(params.outputDir);
  }

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
}
main();
