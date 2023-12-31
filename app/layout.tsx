import QueryProvider from "@/archiv/QueryProvider";
import GoogleAnalyticsScript from "@/components/GoogleAnalyticsScript";
import Navbar from "@/components/Navbar";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import AuthProvider from "./auth/AuthProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: { icon: "/icon.ico" },
  openGraph: {
    title: "My next app",
    description: "Description of my next app",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalyticsScript />
      <body className={`${inter.className}`}>
        <AuthProvider>
          <QueryProvider>
            <Navbar />
            <main className="px-5">
              {/* <Suspense fallback={<p>Loading....</p>}> */}
              {children}
              {/* </Suspense> */}
            </main>
            <ReactQueryDevtools />
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
