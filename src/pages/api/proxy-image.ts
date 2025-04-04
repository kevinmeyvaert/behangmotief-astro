import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const imageUrl = url.searchParams.get('url');

  if (!imageUrl) {
    return new Response('Missing URL parameter', { status: 400 });
  }

  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    return new Response(blob, {
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'image/jpeg',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response('Failed to fetch image', { status: 500 });
  }
};
