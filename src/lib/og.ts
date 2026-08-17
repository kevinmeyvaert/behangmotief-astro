export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_TYPE = 'image/jpeg';

/**
 * URL of the branded share card. Pass the album photo to use as its background;
 * omit it for the brand default. Keyed on `src` so a changed photo yields a new
 * cache key, which is what lets /og.jpg be served immutable.
 */
export function ogImageUrl(backgroundSrc?: string | null): string {
  const query = backgroundSrc ? `?src=${encodeURIComponent(backgroundSrc)}` : '';
  return `/og.jpg${query}`;
}
