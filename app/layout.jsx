import './globals.css';
import { Roboto } from 'next/font/google';
import Navbar from './components/Navbar';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Blacksushi Beats',
  description: 'Online beats selling store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
