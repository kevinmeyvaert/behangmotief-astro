export const RETRY_AFTER_SECONDS = 120;

/**
 * Returned when the album API is unreachable. A 503 tells crawlers to come back
 * rather than indexing the failure — an empty 200, which is what streaming a
 * half-rendered page produces, reads to Google as a soft 404.
 */
export function serviceUnavailable(): Response {
  return new Response('The photo archive is temporarily unavailable.', {
    status: 503,
    headers: {
      'Retry-After': String(RETRY_AFTER_SECONDS),
      'Cache-Control': 'no-store',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
