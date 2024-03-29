import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"],weight:['100','200','300','400','500','600','700','800','900'] });
const quick = Quicksand({ subsets: ["latin"],weight:['300','400','500','600','700'] })

export const metadata: Metadata = {
  title: "0xNunana Labs | Brand Development",
  description: "Brand development and advertisement",
  keywords:'Branding, Web Design,SEO,SAAS,Software,Advertisement,Growth',
  category: 'technology,education, science,advertisement',
  metadataBase:new URL('https://0xnunanalabs.vercel.app/'),
  openGraph:{
    type: "website",
    title: "0xNunana Labs",
    description: "Brand development and advertisement",
    siteName: "0xNunana Labs",
    images:'/opengraph.webp'
  
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quick.className} relative`} >
        <Navigation/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
