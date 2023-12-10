export declare const optimizeImage: ({ image, width, height, quality, }: {
    image: BufferSource;
    width?: number | undefined;
    height?: number | undefined;
    quality?: number | undefined;
}) => Promise<Uint8Array | null>;
