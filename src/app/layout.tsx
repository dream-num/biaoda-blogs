import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blog.biaoda.me";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "表答博客",
    template: `%s | 表答博客`,
  },
  description: "表答博客分享如何将分散的数据转化为智能、数据驱动决策的见解、技巧和案例，利用 AI 分析赋能。",
  keywords: "表答博客, 数据采集, 数据抓取, 数据分析, 数据爬取, AI智能体, 数据可视化, 情感分析, 关键词提取, OLAP, 电商分析, 社交媒体趋势, 民宿优化, 数据洞察, 商业智能, AI数据工具",
  openGraph: {
    title: "表答博客",
    description: "表答博客分享如何将分散的数据转化为智能、数据驱动决策的见解、技巧和案例，利用 AI 分析赋能。",
    url: siteUrl,
    siteName: "表答博客",
    images: [
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "表答博客",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "表答博客",
    description: "表答博客分享如何将分散的数据转化为智能、数据驱动决策的见解、技巧和案例，利用 AI 分析赋能。",
    images: [`${siteUrl}/opengraph-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteUrl}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="zh" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FTC89TSX1V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FTC89TSX1V');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
