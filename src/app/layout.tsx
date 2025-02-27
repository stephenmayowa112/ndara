import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Ndara Studios | Creative Design & Animation Studio',
    template: '%s | Ndara Studios'
  },
  description: 'Professional 3D animation, architectural visualization, and creative design services by Ndara Studios. Transform your ideas into stunning visual experiences.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  openGraph: {
    title: 'Ndara Studios | Creative Design & Animation Studio',
    description: 'Professional 3D animation, architectural visualization, and creative design services.',
    url: 'https://ndarastudios.com',
    siteName: 'Ndara Studios',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Ndara Studios Preview'
    }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
