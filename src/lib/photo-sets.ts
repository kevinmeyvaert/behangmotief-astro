interface Photo {
  id: number;
  documentId: string;
  name: string;
  width: number;
  height: number;
  blurhash: string;
  formats: {
    large: {
      url: string;
    };
    small: {
      url: string;
    };
    medium: {
      url: string;
    };
    thumbnail: {
      url: string;
    };
  };
  url: string;
}

interface PhotoSet {
  id: number;
  documentId: string;
  title: string;
  date: string;
  slug: string;
  description?: string;
  url?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  photos: Photo[];
}

export async function getPhotoSets() {
  const response = await fetch(
    'https://miraculous-amusement-2d9b74fe2c.strapiapp.com/api/photo-sets?sort=date:desc'
  );
  const { data } = await response.json();
  return data as PhotoSet[];
} 