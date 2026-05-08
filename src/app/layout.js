import { Lato, Rufina, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const rufina = Rufina({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-rufina",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "FoodZERO",
  description: "Restaurant website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${lato.variable}
        ${rufina.variable}
        ${inter.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-full flex flex-col justify-between">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
