import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 정적 HTML 출력을 위한 설정
  images: {
    unoptimized: true, // GitHub Pages는 이미지 최적화 서버를 지원하지 않아 필요한 설정
  },
};

export default nextConfig;