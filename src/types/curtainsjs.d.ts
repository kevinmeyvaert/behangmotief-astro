declare module 'curtainsjs' {
  export class Curtains {
    constructor(params: {
      container: string | Element;
      pixelRatio: number;
      premultipliedAlpha?: boolean;
      webGL2?: boolean;
      alpha?: boolean;
      antialias?: boolean;
      preserveDrawingBuffer?: boolean;
    });
    onError(callback: () => void): void;
    onSuccess(callback: () => void): void;
  }

  interface PlaneParams {
    vertexShader: string;
    fragmentShader: string;
    uniforms: {
      [key: string]: {
        name: string;
        type: string;
        value: number;
      };
    };
    widthSegments?: number;
    heightSegments?: number;
    renderOrder?: number;
    transparent?: boolean;
    cullFace?: 'back' | 'front' | 'none';
    texturesOptions?: {
      premultiplyAlpha?: boolean;
      generateMipmap?: boolean;
      floatingPoint?: 'half-float' | 'float';
    };
  }

  export interface Texture {
    id: number;
    name: string;
    source: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement;
    sourceType: string;
    width: number;
    height: number;
  }

  export class Plane {
    uniforms: {
      [key: string]: {
        name: string;
        type: string;
        value: number;
      };
    };

    constructor(curtains: Curtains, container: Element, params: PlaneParams);

    loadImage(image: HTMLImageElement): void;
    onRender(callback: () => void): void;
    onLoading(callback: (texture: Texture) => void): void;
    onReady(callback: () => void): void;
    onError(callback: () => void): void;
  }
}
