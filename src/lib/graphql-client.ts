import request from 'graphql-request';

const WANNABES_API_ENDPOINT = 'https://graphql.wannabes.be/graphql';

export function fetcher<T>(query: string, params?: object): Promise<T> {
  return request(WANNABES_API_ENDPOINT, query, params);
}
