import "./globals.css";
import { Inter } from "next/font/google";
import { AdProvider } from "./context/AdContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trueoptin Demo",
  description: "Created by Lalit Lal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdProvider>{children}</AdProvider>
      </body>
    </html>
  );
}
