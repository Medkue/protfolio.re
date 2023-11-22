"use client";

import "./globals.css";
import { useState } from "react";
import { Activedot } from "@/components/Activedot";
import { Nav } from "@/components/Nav";
import { Intro } from "@/components/Intro";
import { Aboutme } from "@/components/Aboutme";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { GetInTouch } from "@/components/GetInTouch";

// export const metadata = {
//   title: "Next.js",
//   description: "Generated by Next.js",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-[#030712]">{children}</body>
    </html>
  );
}
