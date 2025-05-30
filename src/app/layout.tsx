import type { Metadata } from "next";
import localFonts from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const metroFont = localFonts({
  src: "../../public/fonts/metropolis/Metropolis-Bold.woff2",
  variable: "--font-metropolis",
})

const workFont = localFonts({
  src: [
    {
      path: '../../public/fonts/worksans/worksans-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/worksans/worksans-bold.woff',
      weight: '800',
      style: 'italic',
    }
  ],
  variable: "--font-work-sans",
})

export const metadata: Metadata = {
  title: "Portfolio Mockup"
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${metroFont.variable} ${workFont.variable}`}>
      <body className="text-black antialiased">
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
