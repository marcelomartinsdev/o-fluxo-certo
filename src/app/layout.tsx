import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const metadataBase = configuredSiteUrl ? new URL(configuredSiteUrl) : undefined;

export const metadata: Metadata = {
  metadataBase,
  title: "O Fluxo Certo | Antony Day Trade",
  description:
    "Conheça O Fluxo Certo, método desenvolvido por Antony para leitura de fluxo e execução automatizada de estratégias de trading. Participe da apresentação.",
  applicationName: "O Fluxo Certo",
  alternates: configuredSiteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "O Fluxo Certo",
    title: "O Fluxo Certo | Apresentação com Antony",
    description:
      "Conheça a lógica de leitura de fluxo e execução baseada em regras desenvolvida por Antony.",
    images: configuredSiteUrl
      ? [
          {
            url: "/images/hero/antony-fluxo-certo.png",
            width: 1672,
            height: 941,
            alt: "Antony na apresentação O Fluxo Certo",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "O Fluxo Certo | Antony Day Trade",
    description:
      "Uma apresentação sobre leitura de fluxo, regras e execução automatizada.",
    images: configuredSiteUrl
      ? ["/images/hero/antony-fluxo-certo.png"]
      : undefined,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030504",
  colorScheme: "dark",
};

const directionContract = `THESIS: O mercado deixa um rastro legível; a página recusa o funil cripto de cards e transforma a rolagem em uma bancada de calibração do fluxo.
OWN-WORLD: vidro óptico preto, grafite técnico, off-white e sinal verde; linhas medidas, escalas, fotografia fundida e painéis somente quando carregam evidência.
STORY: o visitante reconhece a falha emocional, entende a mudança para fluxo e regras, vê testes identificados e entra no grupo para assistir à apresentação.
FIRST VIEWPORT: copy ocupa o terço esquerdo, a imagem 9 domina o campo direito, um traço vivo costura ambos e o CTA aparece antes da dobra.
FORM: bancada de calibração/oscilloscope, candidato 4, seed 8c3c0d12.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const contractScript = `document.body.insertBefore(document.createComment(${JSON.stringify(directionContract)}),document.body.firstChild);`;

  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${body.variable}`}>
        <script
          id="impeccable-direction-contract"
          dangerouslySetInnerHTML={{ __html: contractScript }}
        />
        <Analytics />
        <MotionProvider />
        {children}
      </body>
    </html>
  );
}
