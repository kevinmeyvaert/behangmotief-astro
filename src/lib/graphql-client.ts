import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://graphql.wannabes.be/graphql';

export const graphqlClient = new GraphQLClient(endpoint, {
  headers: {
    'Content-Type': 'application/json',
  },
});
