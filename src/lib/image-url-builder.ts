export interface ImageTransformOptions {
  width?: number;
  height?: number;
  format?: 'jpg' | 'webp' | 'png';
  quality?: number;
  crop?: 'SQ' | 'C' | 'PD1';
  pixelDensity?: number;
}

export class ImageUrlBuilder {
  private static readonly BASE_URL = 'https://images.wannabes.be';
  
  static build(imagePath: string, options: ImageTransformOptions = {}): string {
    const {
      width,
      height,
      format,
      quality,
      crop,
      pixelDensity = 1
    } = options;

    const params: string[] = [];
    
    // Size parameters
    if (width || height) {
      const sizeParams: string[] = [];
      if (width) sizeParams.push(`W${width}`);
      if (height) sizeParams.push(`H${height}`);
      if (pixelDensity !== 1) sizeParams.push(`PD${pixelDensity}`);
      params.push(`S=${sizeParams.join(',')}`);
    }
    
    // Crop parameter
    if (crop) {
      params.push(`C=${crop}`);
    }
    
    // Format parameter
    if (format) {
      params.push(`F=${format.toUpperCase()}`);
    }
    
    // Quality parameter
    if (quality) {
      params.push(`Q=${quality}`);
    }
    
    // Build final URL
    if (params.length > 0) {
      return `${this.BASE_URL}/${params.join('/')}/${imagePath}`;
    }
    
    return `${this.BASE_URL}/${imagePath}`;
  }
  
  static thumbnail(imagePath: string, size: number = 500): string {
    return this.build(imagePath, {
      width: size,
      height: size,
      crop: 'SQ',
      pixelDensity: 1
    });
  }
  
  static hero(imagePath: string): string {
    return this.build(imagePath, {
      width: 2500,
      height: 2500,
      pixelDensity: 1
    });
  }
  
  static gallery(imagePath: string): string {
    return this.build(imagePath, {
      width: 1200,
      height: 800,
      pixelDensity: 1
    });
  }
  
  static square(imagePath: string, size: number = 500): string {
    return this.build(imagePath, {
      width: size,
      height: size,
      crop: 'SQ',
      pixelDensity: 1
    });
  }
}