# GQL Function Generator

The GQL Function Generator is a script that automates the process of generating TypeScript files for GraphQL fragments, mutations, and queries. It leverages the capabilities of the `graphql` and `urql` packages to parse GraphQL documents and generate functions.

## Installation

This script assumes that you have Node.js and npm installed. If not, please install them first.

The following packages are required:

- `@graphql-codegen/cli` and `@graphql-codegen/client-preset` for generating TypeScript types for GraphQL documents
- `graphql` for parsing GraphQL documents
- `urql` for executing GraphQL operations in a React environment

The following development packages are also required:

- `@types/node` for Node.js type definitions
- `nodemon` for automatically restarting the Node.js application when file changes are detected
- `rimraf` for removing folders and files
- `ts-node` for executing TypeScript code directly
- `typescript` for compiling TypeScript code

To install tall dependencies, run:

```
npm install
```

## Usage

The script can be executed with the following command:

```
npm run generate -- --gqlFilePath=./custom/location/gql.ts --graphqlFilePath=./custom/location/graphql.ts --outputDir=./custom/output/directory/
```

Here's what each argument means:

- `--gqlFilePath` (optional): The path to the `.ts` file that exports the `documents` object containing your GraphQL documents. The default value is `./src/gqlFilePath`.
- `--graphqlFilePath` (optional): The path to the `.ts` file that exports the `graphql` function from the `urql` package. The default value is `./src/graphqlFilePath`.
- `--outputDir` (optional): The directory where the generated `.ts` files should be saved. The default value is `./generated/`.

## Example

Assuming that you have a `documents.ts` file in your `src` directory that exports a `documents` object, and a `gql.ts` file that exports the `graphql` function from `urql`, you can generate functions for your GraphQL documents with the following command:

```
npm run generate -- --gqlFilePath=./custom/location/gql.ts --graphqlFilePath=./custom/location/graphql.ts --outputDir=./custom/output/directory/
```

This command will create `fragmentFunctions.ts`, `mutationFunctions.ts`, and `queryFunctions.ts` files in the `generated` directory. These files will contain functions for all the fragments, mutations, and queries defined in your `documents` object.

You can then import these functions in your React components to execute your GraphQL operations.

```tsx
import { useQuery } from 'urql';
import { MyQuery } from './generated/queryFunctions';

function MyComponent() {
  const [result] = useQuery({ query: MyQuery });
  // ...
}
```

## Error Handling

The script includes error handling to catch any errors that might occur during the file writing process. If an error occurs, the script will log the error message to the console and terminate.

If you encounter any issues while using this script, please check the console output for any error messages that might help you diagnose the problem. If you're still having trouble, feel free to open an issue on this repository.