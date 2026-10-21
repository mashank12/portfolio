/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = "";
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const repoName = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  // If the repository is a user/organization page (username.github.io), basePath is not needed
  if (!repoName.endsWith(".github.io")) {
    repo = `/${repoName}`;
  }
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || repo;

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
  basePath: basePath || undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
