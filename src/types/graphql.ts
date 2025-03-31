export interface Post {
  id: string;
  artist: {
    name: string;
  };
  date: string;
  slug: string;
  images: {
    blurhash: string;
    photographer: {
      firstName: string;
    };
    resized: string;
  }[];
  thumbnail: {
    blurhash: string;
    hires: string;
    photographer: {
      firstName: string;
    };
    dimensions: {
      width: number;
      height: number;
    };
  };
  venue: {
    id: string;
    name: string;
  };
  event: {
    name: string;
  };
}

export interface PostsResponse {
  posts: {
    data: Post[];
    pagination: {
      start: number;
      limit: number;
      total: number;
    };
  };
}

export interface SearchVariables {
  start?: number;
  limit?: number;
  all?: string;
}
