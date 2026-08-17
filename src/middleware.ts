import type { MiddlewareHandler } from 'astro';
import { ImageUrlBuilder } from '@/lib/image-url-builder';

/**
 * Until the custom image service landed, prerendered pages emitted remote photos
 * as build-time assets at /_astro/<cdn-name>_<hash>.<ext>. Other sites hotlink
 * those URLs, and they are no longer generated, so send them to the CDN original
 * rather than letting them 404. The hash is discarded, which makes this work for
 * every hash Astro ever produced for a given photo.
 *
 * Only reached when a request misses the static filesystem, so real /_astro
 * assets are unaffected.
 */
const LEGACY_IMAGE_ASSET = /^\/_astro\/(hires-.+)_[^_./]+\.(?:jpg|jpeg|png|webp|avif)$/;

export const onRequest: MiddlewareHandler = (context, next) => {
  const legacy = context.url.pathname.match(LEGACY_IMAGE_ASSET);

  if (legacy) {
    // Wannabes serves these as .jpg regardless of the format Astro emitted.
    return context.redirect(ImageUrlBuilder.build(`${legacy[1]}.jpg`), 301);
  }

  return next();
};
