import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { assetPath } from "@/components/assetPath";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stellar Technical Services | Smarter Water. Better Environments.",
  description:
    "Thoughtful water treatment, nanobubble pool technology and scent diffuser systems for better everyday environments.",
};

// CSS url() paths are not basePath-aware, so the logo URL is provided as a variable.
const assetVariables = { "--stellar-logo": `url("${assetPath("/stellar-logo.png")}")` } as CSSProperties;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={assetVariables}>{children}</body>
    </html>
  );
}
