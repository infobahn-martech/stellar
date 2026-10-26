const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// next/image does not apply basePath to string sources, so root-relative public
// paths are prefixed here. External, data:, blob: and relative URLs pass through.
export function assetPath(path: string) {
  if (!basePath || !path.startsWith("/") || path.startsWith("//")) return path;
  if (path === basePath || path.startsWith(`${basePath}/`)) return path;
  return `${basePath}${path}`;
}
