import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ADM Sites e Sistemas | Desenvolvimento Web Profissional",
  description: "Desenvolvimento de sites institucionais, e-commerce, landing pages e sistemas personalizados. Soluções digitais completas para o seu negócio.",
  keywords: ["desenvolvimento web", "sites institucionais", "e-commerce", "landing page", "sistemas web", "desenvolvimento de sistemas"],
  authors: [{ name: "ADM Sites e Sistemas" }],
  openGraph: {
    title: "ADM Sites e Sistemas | Desenvolvimento Web",
    description: "Desenvolvimento de sites, e-commerce, landing pages e sistemas personalizados",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" style={{ backgroundColor: '#0a1628' }} suppressHydrationWarning>
      <body
        className={`${archivo.variable} antialiased`}
        style={{ backgroundColor: '#0a1628', fontFamily: 'var(--font-archivo)' }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
