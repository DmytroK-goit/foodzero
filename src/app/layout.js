import { Lato, Rufina, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimationProvider from "@/components/AnimationProvider";

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
  description:
    "FoodZERO is a modern restaurant website focused on healthy eating, seasonal ingredients, and unforgettable dining experiences. Discover elegant dishes, fresh products, and a refined culinary atmosphere.",
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
        <AnimationProvider>
          <Header />

          {children}

          <ScrollToTop />

          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
