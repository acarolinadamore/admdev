import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Evita que o Next.js remova/adicione barra final antes do rewrite de
  // /proposta/:path* no vercel.json, que proxya para um worker que exige
  // barra final — sem isso ocorre loop de redirect (ERR_TOO_MANY_REDIRECTS).
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
