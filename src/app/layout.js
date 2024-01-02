import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Blacksushi beats',
  description: 'Blacksushi beat store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-400 text-white container mx-auto p-4`}>{children}</body>
    </html>
  );
}
