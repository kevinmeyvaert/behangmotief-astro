import request from 'graphql-request';

const WANNABES_API_ENDPOINT = 'https://graphql.wannabes.be/graphql';

/**
 * Comfortably inside the serverless function's limit, so a slow upstream leaves
 * enough room to answer with a 503 instead of being killed mid-response.
 */
const REQUEST_TIMEOUT_MS = 6000;

/** The album data could not be fetched, so the page cannot be rendered. */
export class UpstreamUnavailableError extends Error {
  constructor(cause: unknown) {
    const reason = cause instanceof Error ? cause.message : String(cause);
    super(`Wannabes API unavailable: ${reason}`);
    this.name = 'UpstreamUnavailableError';
    this.cause = cause;
  }
}

export async function fetcher<T>(query: string, params?: object): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    return await request<T>({
      url: WANNABES_API_ENDPOINT,
      document: query,
      variables: params,
      signal: controller.signal,
    });
  } catch (error) {
    console.error('[wannabes]', error);
    throw new UpstreamUnavailableError(error);
  } finally {
    clearTimeout(timeout);
  }
}
