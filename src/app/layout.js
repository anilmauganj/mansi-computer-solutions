
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

import '@fortawesome/fontawesome-free/css/all.min.css';

import "./globals.css";


export const metadata = {
  title: "Mansi Computer Solutions - Computer, Laptop & Printer Repair in Mauganj",
  description: "Mansi Computer Solutions, run by Mr. Manish Mishra in Mauganj, offers expert computer hardware & software support, laptop and printer repair, and sales of new computers. Trusted for 17+ years of honest and reliable IT services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
