import "@/app/css/style.css";
import { metadata } from "../metadata";
import { Inter } from "next/font/google";
import Header from "../components/ui/headerthree";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <head>
        {/* You can include your meta tags, title, styles, etc. here */}
      </head>
      <body className={inter.variable}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
