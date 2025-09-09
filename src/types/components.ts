// Common image properties used across components
export interface ImageData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurhash?: string;
}

// Album/Post data structure
export interface AlbumPost {
  id: string;
  slug: string;
  date: string;
  artist: {
    name: string;
    slug?: string;
  };
  venue: {
    name: string;
    slug?: string;
  };
  event?: {
    name: string;
  };
  thumbnail: {
    blurhash: string;
    hires: string;
    dimensions: {
      width: number;
      height: number;
    };
    photographer?: {
      firstName: string;
    };
  };
  images?: Array<{
    id: string;
    blurhash: string;
    hires: string;
    dimensions?: {
      width: number;
      height: number;
    };
    photographer?: {
      firstName: string;
    };
  }>;
}

// Grid layout properties
export interface GridLayoutProps {
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: string;
  loading?: 'lazy' | 'eager';
}

// Common component properties
export interface ComponentBase {
  className?: string;
  id?: string;
}

// Image component properties
export interface ImageComponentProps extends ComponentBase, ImageData {
  loading?: 'lazy' | 'eager';
}

// Pagination properties
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  searchParams?: URLSearchParams;
}