import type { Metadata } from "next";
import localFont from "next/font/local";
import { ToastProvider } from "@/contexts/ToastContext";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modal,
  toast,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
  toast: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased font-[family-name:var(--font-geist-sans)]`}
      >
        <ToastProvider>
          {children}
          {modal}
          <div id="modal-root" />
          {toast}
        </ToastProvider>
      </body>
    </html>
  );
}
