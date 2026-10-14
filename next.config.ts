import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Evita que o Next.js remova/adicione barra final antes do rewrite de
  // /proposta/:path* no vercel.json, que proxya para um worker que exige
  // barra final — sem isso ocorre loop de redirect (ERR_TOO_MANY_REDIRECTS).
  skipTrailingSlashRedirect: true,

  // Com skipTrailingSlashRedirect ativo, o Next.js para de normalizar a
  // barra final sozinho — então /proposta/<slug>/ (com barra) passava a
  // cair direto no 404 do Next.js em vez de ser roteado. Este redirect
  // remove a barra final só em /proposta/*, mantendo o resto do site como
  // estava.
  async redirects() {
    return [
      // Contrato e manutenção viraram rotas de topo na reorganização dos
      // documentos do adm-ops (antes eram sub-rotas de /proposta/<slug>/*).
      {
        source: "/proposta/:slug/contrato",
        destination: "/contrato/:slug",
        permanent: true,
      },
      {
        source: "/proposta/:slug/manutencao",
        destination: "/manutencao/:slug",
        permanent: true,
      },
      {
        source: "/proposta/:path+/",
        destination: "/proposta/:path+",
        permanent: true,
      },
    ];
  },

  // Mesmos rewrites do vercel.json, duplicados aqui para o Next.js também
  // conhecer essas rotas diretamente (garante que o proxy para o worker
  // funcione mesmo quando a requisição chega até o runtime do Next.js, não
  // só na borda da Vercel).
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/proposta/:path*",
          destination:
            "https://adm-ops-propostas.grupoadmtecnologia.workers.dev/proposta/:path*",
        },
        {
          source: "/contrato/:path*",
          destination:
            "https://adm-ops-propostas.grupoadmtecnologia.workers.dev/contrato/:path*",
        },
        {
          source: "/manutencao/:path*",
          destination:
            "https://adm-ops-propostas.grupoadmtecnologia.workers.dev/manutencao/:path*",
        },
        {
          source: "/checklist/:path*",
          destination:
            "https://adm-ops-propostas.grupoadmtecnologia.workers.dev/checklist/:path*",
        },
        {
          source: "/tabela-precos",
          destination:
            "https://adm-ops-propostas.grupoadmtecnologia.workers.dev/tabela-precos",
        },
        {
          source: "/tabela-precos/:path*",
          destination:
            "https://adm-ops-propostas.grupoadmtecnologia.workers.dev/tabela-precos/:path*",
        },
        {
          source: "/escopo/:path*",
          destination:
            "https://adm-ops-propostas.grupoadmtecnologia.workers.dev/escopo/:path*",
        },
        {
          source: "/termo-aceite/:path*",
          destination:
            "https://adm-ops-propostas.grupoadmtecnologia.workers.dev/termo-aceite/:path*",
        },
        {
          source: "/_astro/:path*",
          destination:
            "https://adm-ops-propostas.grupoadmtecnologia.workers.dev/_astro/:path*",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
