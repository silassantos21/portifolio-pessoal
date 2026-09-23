export const SITE_CONFIG = {
  // Sem domínio definitivo ainda — atualize NEXT_PUBLIC_SITE_URL no
  // deploy para o domínio real (necessário para hreflang/SEO absoluto).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  name: "Silas Ribeiro dos Santos",
  github: "https://github.com/silassantos21",
  linkedin: "https://www.linkedin.com/in/silas-santos/",
  email: "silasribeiro11@gmail.com",
  phone: "+5531994929453",
  phoneDisplay: "(31) 9 9492-9453",
} as const;
