const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  const cleanSrc = src.startsWith("/") ? src : `/${src}`;
  return `${basePath}${cleanSrc}`;
}
