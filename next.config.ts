import { configHeader } from '@/utils/constants';
import type { NextConfig } from "next";

const bagistoEndpoint =
  process.env.NEXT_PUBLIC_BAGISTO_ENDPOINT || process.env.BAGISTO_ENDPOINT || "";
const storefrontKey =
  process.env.NEXT_PUBLIC_BAGISTO_STOREFRONT_KEY ||
  process.env.BAGISTO_STOREFRONT_KEY ||
  "";
const siteUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
const siteName = process.env.SITE_NAME || process.env.COMPANY_NAME || "Bagisto";
const companyName = process.env.COMPANY_NAME || process.env.SITE_NAME || siteName;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  env: {
    NEXT_PUBLIC_BAGISTO_ENDPOINT: bagistoEndpoint,
    NEXT_PUBLIC_BAGISTO_STOREFRONT_KEY: storefrontKey,
    NEXTAUTH_URL: siteUrl,
    SITE_NAME: siteName,
    COMPANY_NAME: companyName,
  },
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  async headers() {
    return configHeader;
  },
  compress: true, 
  experimental: {
    optimizePackageImports: ["lodash", "date-fns"],
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default nextConfig;
