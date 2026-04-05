import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Tells Next.js to build static HTML files
  output: "export", 
  
  // 2. VERY IMPORTANT: Replace this with your exact GitHub repository name
  basePath: "/scroll-animation-learning", 

  images: {
    // 3. Required for static exports on GitHub Pages, even for local images
    unoptimized: true, 
  },
};

export default nextConfig;