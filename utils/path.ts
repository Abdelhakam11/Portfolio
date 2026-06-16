const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const withBase = (src: string) => `${base}${src}`;
