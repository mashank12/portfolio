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
    unoptimized: true,
  },
  basePath: basePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
