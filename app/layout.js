import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Navbar from "@/components/shared/Navar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Enrollify",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <AntdRegistry>
          {children}
          </AntdRegistry>
    </body>
    </html>
  );
}
