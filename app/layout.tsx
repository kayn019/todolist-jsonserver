
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Todo list',
  description: 'simple todo app for learning nextJS 13',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang='en' data-theme={'light'}>
      <body suppressHydrationWarning={true} className={inter.className}>
        {children}
      </body>
    </html >
  );
}
