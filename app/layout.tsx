import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/nav";
import Template from "./template";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ]
});

export const metadata: Metadata = {
  title: "Lucas Dev | Desenvolvedor Front-End",
  description: "Portfólio de Lucas, desenvolvedor front-end especializado em React, Next.js e interfaces modernas. Transformando ideias em experiências digitais.",
  keywords: "Lucas, desenvolvedor front-end, React, Next.js, Tailwind, portfólio, tecnologia, inovação, currículo, vagas de programador",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Navbar/>
        <main><Template>{children}</Template></main>
        <footer role="contentinfo">
          <h1 className="footer-h1">Lucas Dev - Todos os direitos Reservados - 2025</h1>
        </footer>
      </body>
    </html>
  );
}