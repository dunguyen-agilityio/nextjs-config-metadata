import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://nextjs-config-metadata.vercel.app/icon.webp"
          type="image/webp"
          sizes="256x256"
        />
        <link
          rel="apple-touch-icon"
          href="https://nextjs-config-metadata.vercel.app/icon.webp"
          type="image/webp"
          sizes="256x256"
        />
        <meta
          property="og:title"
          content="next.config.js Options: mdxRs | Next.js"
        />
        <meta
          property="og:description"
          content="Use the new Rust compiler to compile MDX files in the App Router."
        />
        <meta
          property="og:url"
          content="https://nextjs-config-metadata.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://nextjs-config-metadata.vercel.app/icon.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
        <link
          rel="canonical"
          href="https://nextjs-config-metadata.vercel.app"
        />

        <meta name="twitter:title" content="next.config.js Options: mdxRs" />
        <meta
          name="twitter:description"
          content="Use the new Rust compiler to compile MDX files in the App Router."
        />
        <meta
          name="twitter:image"
          content="https://nextjs-config-metadata.vercel.app/icon.webp"
        />
        <meta name="twitter:image:type" content="image/webp" />
        <meta name="twitter:image:width" content="256" />
        <meta name="twitter:image:height" content="256" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
