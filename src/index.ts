import { documents } from './gql';
const fs = require('fs');

const keys: string[] = Object.keys(documents);
const file = 'functions.txt';

let fragments: string[] = [];
let mutations: string[] = [];
let queries: string[] = [];

for (let i = 0; i < keys.length; i++) {
  if (keys[i].startsWith('fragment')) {
    // prettier-ignore
    fragments.push(`export const ${keys[i].split(' ')[1]} = graphql(/* GraphQL */ \`${keys[i]}\`);`);
  } else if (keys[i].startsWith('mutation')) {
    let title = keys[i].split(' ')[1];
    title = title.split('(')[0];
    // prettier-ignore
    mutations.push(`export const ${title} = graphql(/* GraphQL */ \`${keys[i]}\`);`);
  } else if (keys[i].startsWith('query')) {
    let title = '';
    if (keys[i].startsWith('query All')) {
      title = keys[i].split(' ')[1];
    } else {
      title = keys[i].split(' ')[1];
      title = title.split('(')[0];
    }

    // prettier-ignore
    queries.push(`export const ${title} = graphql(/* GraphQL */ \`${keys[i]}\`);`);
  }
}

let gigaString: string = `import { graphql } from "@/gql"; \r\n`;

fragments.forEach(async (s) => {
  gigaString += '\r\n // prettier-ignore \r\n';
  gigaString += s.replaceAll('\n', '\\n');
});

mutations.forEach(async (s) => {
  gigaString += '\r\n // prettier-ignore \r\n';
  gigaString += s.replaceAll('\n', '\\n');
});

queries.forEach(async (s) => {
  gigaString += '\r\n // prettier-ignore \r\n';
  gigaString += s.replaceAll('\n', '\\n');
});

fs.writeFile(file, gigaString, function (err: any) {
  if (err) return console.log(err);
});
