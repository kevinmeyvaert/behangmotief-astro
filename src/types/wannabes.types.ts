/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Maybe<T> = T;
export type InputMaybe<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: string; output: string; }
  Upload: { input: unknown; output: unknown; }
};

export type Artist = {
  __typename?: 'Artist';
  id: Scalars['String']['output'];
  lastPost: Maybe<Post>;
  name: Maybe<Scalars['String']['output']>;
  postCount: Maybe<Scalars['Int']['output']>;
  posts: Maybe<PostList>;
  searchScore: Maybe<Scalars['Float']['output']>;
  similar: Maybe<ArtistList>;
  slug: Scalars['String']['output'];
  spotifyFollowers: Maybe<Scalars['Int']['output']>;
  spotifyGenres: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  spotifyPopularity: Maybe<Scalars['Int']['output']>;
};


export type ArtistPostsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};


export type ArtistSimilarArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type ArtistList = {
  __typename?: 'ArtistList';
  data: Maybe<Array<Maybe<Artist>>>;
  pagination: Maybe<Pagination>;
};

export enum CacheControlScope {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC'
}

export type Dimensions = {
  __typename?: 'Dimensions';
  height: Maybe<Scalars['Int']['output']>;
  width: Maybe<Scalars['Int']['output']>;
};

export type Event = {
  __typename?: 'Event';
  id: Scalars['String']['output'];
  lastPost: Maybe<Post>;
  name: Maybe<Scalars['String']['output']>;
  postCount: Maybe<Scalars['Int']['output']>;
  posts: Maybe<PostList>;
  searchScore: Maybe<Scalars['Float']['output']>;
  slug: Maybe<Scalars['String']['output']>;
};


export type EventPostsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type EventList = {
  __typename?: 'EventList';
  data: Maybe<Array<Maybe<Event>>>;
  pagination: Maybe<Pagination>;
};

export type Image = {
  __typename?: 'Image';
  blurhash: Maybe<Scalars['String']['output']>;
  dimensions: Maybe<Dimensions>;
  hires: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  photographer: Maybe<Photographer>;
  resized: Maybe<Scalars['String']['output']>;
  tiny: Maybe<Scalars['String']['output']>;
};


export type ImageBlurhashArgs = {
  square: InputMaybe<Scalars['Boolean']['input']>;
};


export type ImageResizedArgs = {
  height: Scalars['Int']['input'];
  square: InputMaybe<Scalars['Boolean']['input']>;
  width: Scalars['Int']['input'];
};


export type ImageTinyArgs = {
  square: InputMaybe<Scalars['Boolean']['input']>;
};

export type LetterPart = {
  __typename?: 'LetterPart';
  artistCount: Maybe<Scalars['Int']['output']>;
  artists: Maybe<Array<Maybe<Artist>>>;
  firstArtist: Maybe<Artist>;
  firstLetter: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastArtist: Maybe<Artist>;
  lastLetter: Maybe<Scalars['String']['output']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  limit: Maybe<Scalars['Int']['output']>;
  start: Maybe<Scalars['Int']['output']>;
  total: Maybe<Scalars['Int']['output']>;
};

export type Photographer = {
  __typename?: 'Photographer';
  active: Maybe<Scalars['Boolean']['output']>;
  bestof: Maybe<PostList>;
  email: Maybe<Scalars['String']['output']>;
  facebook: Maybe<Scalars['String']['output']>;
  firstName: Maybe<Scalars['String']['output']>;
  fullName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image: Maybe<Image>;
  instagram: Maybe<Scalars['String']['output']>;
  lastName: Maybe<Scalars['String']['output']>;
  lastPost: Maybe<Post>;
  postCount: Maybe<Scalars['Int']['output']>;
  posts: Maybe<PostList>;
  searchScore: Maybe<Scalars['Float']['output']>;
  slug: Maybe<Scalars['String']['output']>;
  startYear: Maybe<Scalars['String']['output']>;
  twitter: Maybe<Scalars['String']['output']>;
  website: Maybe<Scalars['String']['output']>;
};


export type PhotographerBestofArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};


export type PhotographerPostsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type PhotographerList = {
  __typename?: 'PhotographerList';
  data: Maybe<Array<Maybe<Photographer>>>;
  pagination: Maybe<Pagination>;
};

export type Post = {
  __typename?: 'Post';
  artist: Maybe<Artist>;
  date: Maybe<Scalars['Date']['output']>;
  event: Maybe<Event>;
  id: Scalars['ID']['output'];
  images: Maybe<Array<Maybe<Image>>>;
  photographers: Maybe<Array<Maybe<Photographer>>>;
  searchScore: Maybe<Scalars['Float']['output']>;
  slug: Scalars['String']['output'];
  thumbnail: Maybe<Image>;
  timestamp: Maybe<Scalars['Int']['output']>;
  url: Maybe<Scalars['String']['output']>;
  venue: Maybe<Venue>;
};

export type PostList = {
  __typename?: 'PostList';
  data: Maybe<Array<Maybe<Post>>>;
  pagination: Maybe<Pagination>;
};

export type Query = {
  __typename?: 'Query';
  allSlugs: Maybe<Slugs>;
  artist: Maybe<Artist>;
  artists: Maybe<ArtistList>;
  artistsSplittedInLetterParts: Maybe<Array<Maybe<LetterPart>>>;
  artistsStartingWithLetter: Maybe<Array<Maybe<Artist>>>;
  bestof: Maybe<PostList>;
  event: Maybe<Event>;
  events: Maybe<EventList>;
  photographer: Maybe<Photographer>;
  photographers: Maybe<PhotographerList>;
  post: Maybe<Post>;
  postSearch: Maybe<PostList>;
  posts: Maybe<PostList>;
  randomPost: Maybe<PostList>;
  search: Maybe<SearchResult>;
  stats: Maybe<Stats>;
  venue: Maybe<Venue>;
  venues: Maybe<VenueList>;
};


export type QueryArtistArgs = {
  id: InputMaybe<Scalars['String']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
};


export type QueryArtistsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryArtistsSplittedInLetterPartsArgs = {
  amount: InputMaybe<Scalars['Int']['input']>;
};


export type QueryArtistsStartingWithLetterArgs = {
  letter: InputMaybe<Scalars['String']['input']>;
};


export type QueryBestofArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEventArgs = {
  id: InputMaybe<Scalars['String']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
};


export type QueryEventsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPhotographerArgs = {
  id: InputMaybe<Scalars['String']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
};


export type QueryPhotographersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  onlyActive?: InputMaybe<Scalars['Boolean']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPostArgs = {
  id: InputMaybe<Scalars['String']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostSearchArgs = {
  all: InputMaybe<Scalars['String']['input']>;
  artist: InputMaybe<Scalars['String']['input']>;
  artistId: InputMaybe<Scalars['String']['input']>;
  artistSlug: InputMaybe<Scalars['String']['input']>;
  event: InputMaybe<Scalars['String']['input']>;
  eventId: InputMaybe<Scalars['String']['input']>;
  eventSlug: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  photographer: InputMaybe<Scalars['String']['input']>;
  photographerId: InputMaybe<Scalars['String']['input']>;
  photographerSlug: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['Boolean']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  venue: InputMaybe<Scalars['String']['input']>;
  venueId: InputMaybe<Scalars['String']['input']>;
  venueSlug: InputMaybe<Scalars['String']['input']>;
  year: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPostsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRandomPostArgs = {
  amount?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySearchArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  q: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['Boolean']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryVenueArgs = {
  id: InputMaybe<Scalars['String']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
};


export type QueryVenuesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type SearchResult = {
  __typename?: 'SearchResult';
  artists: Maybe<ArtistList>;
  events: Maybe<EventList>;
  photographers: Maybe<PhotographerList>;
  posts: Maybe<PostList>;
  venues: Maybe<VenueList>;
};


export type SearchResultArtistsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  start: InputMaybe<Scalars['Int']['input']>;
};


export type SearchResultEventsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  start: InputMaybe<Scalars['Int']['input']>;
};


export type SearchResultPhotographersArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  start: InputMaybe<Scalars['Int']['input']>;
};


export type SearchResultPostsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  start: InputMaybe<Scalars['Int']['input']>;
};


export type SearchResultVenuesArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  start: InputMaybe<Scalars['Int']['input']>;
};

export type Slugs = {
  __typename?: 'Slugs';
  artists: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  events: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['ID']['output'];
  photographers: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  posts: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  venues: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Stats = {
  __typename?: 'Stats';
  artistCount: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  photographerCount: Maybe<Scalars['Int']['output']>;
  postCount: Maybe<Scalars['Int']['output']>;
  venueCount: Maybe<Scalars['Int']['output']>;
};


export type StatsPhotographerCountArgs = {
  onlyActive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Venue = {
  __typename?: 'Venue';
  id: Scalars['String']['output'];
  lastPost: Maybe<Post>;
  name: Maybe<Scalars['String']['output']>;
  postCount: Maybe<Scalars['Int']['output']>;
  posts: Maybe<PostList>;
  searchScore: Maybe<Scalars['Float']['output']>;
  slug: Scalars['String']['output'];
};


export type VenuePostsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type VenueList = {
  __typename?: 'VenueList';
  data: Maybe<Array<Maybe<Venue>>>;
  pagination: Maybe<Pagination>;
};

export type SearchQueryVariables = Exact<{
  start: number | null | undefined;
  limit: number | null | undefined;
  all: string | null | undefined;
}>;


export type SearchQuery = { posts: { data: Array<{ id: string, date: string, slug: string, artist: { name: string }, images: Array<{ blurhash: string, resized: string, photographer: { firstName: string } }>, thumbnail: { blurhash: string, hires: string, photographer: { firstName: string }, dimensions: { width: number, height: number } }, venue: { id: string, name: string }, event: { name: string } }>, pagination: { start: number, limit: number, total: number } } };

export type AlbumQueryVariables = Exact<{
  slug: string | null | undefined;
}>;


export type AlbumQuery = { post: { date: string, id: string, url: string, thumbnail: { resized: string, photographer: { firstName: string } }, artist: { name: string, slug: string }, venue: { name: string, slug: string }, event: { name: string }, images: Array<{ blurhash: string, hires: string, id: string, dimensions: { width: number, height: number }, photographer: { firstName: string } }> } };

export type RelatedPostsQueryVariables = Exact<{
  artistSlug: string | null | undefined;
  venueSlug: string | null | undefined;
}>;


export type RelatedPostsQuery = { sameArtist: { data: Array<{ id: string, slug: string, date: string, venue: { name: string }, artist: { name: string }, thumbnail: { hires: string, blurhash: string, photographer: { firstName: string }, dimensions: { width: number, height: number } }, images: Array<{ blurhash: string, resized: string, photographer: { firstName: string } }>, event: { name: string } }> }, sameVenue: { data: Array<{ id: string, slug: string, date: string, venue: { name: string }, artist: { name: string }, thumbnail: { hires: string, blurhash: string, photographer: { firstName: string }, dimensions: { width: number, height: number } }, images: Array<{ blurhash: string, resized: string, photographer: { firstName: string } }>, event: { name: string } }> } };

export type RelatedPostFieldsFragment = { id: string, slug: string, date: string, venue: { name: string }, artist: { name: string }, thumbnail: { hires: string, blurhash: string, photographer: { firstName: string }, dimensions: { width: number, height: number } }, images: Array<{ blurhash: string, resized: string, photographer: { firstName: string } }>, event: { name: string } };
