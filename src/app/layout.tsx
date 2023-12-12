import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import { Header, UnderButton } from '@/components/common';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: "Sohyeon's Portfolio",
  description: "Front-End Developer Lee So-hyun's Portfolio",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
