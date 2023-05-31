import "./globals.css";
// import { Inter } from 'next/font/google'
import localFont from "next/font/local";
import ThemeProvider from "../components/ThemeProvider";

// const inter = Inter({ subsets: ['latin'] })]
const myFont = localFont({ src: "../public/Yuki Handwriting.ttf" });

export const metadata = {
  title: "Cute Avatar Sketch API",
  description: "An open-source API that allows you to fetch cute avatar sketch images.",
  manifest: '/site.webmanifest',
  'msapplication-TileColor': "#e4dccc",
  'theme-color': "#e4dccc"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
