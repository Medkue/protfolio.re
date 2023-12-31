"use client";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Intro } from "@/components/Intro";
import { Aboutme } from "@/components/Aboutme";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { GetInTouch } from "@/components/GetInTouch";
import { useState } from "react";

export default function Home(props) {
  const [darkmode, setDarkmode] = useState(false);
  const [menu, setMenu] = useState(false);
  let kk = "flex";
  return (
    <div
      className={
        darkmode ? "dark dark:bg-[#030712] dark:text-[#fff]" : undefined
      }
    >
      <div className="w-full flex flex-col items-center gap-y-28 dark:bg-[#030712]">
        <Nav
          setDarkmode={setDarkmode}
          darkmode={darkmode}
          menu={menu}
          setMenu={setMenu}
        ></Nav>
        <Intro darkmode={darkmode}></Intro>
        <Aboutme darkmode={darkmode}></Aboutme>
        <Skills darkmode={darkmode}></Skills>
        <Experience darkmode={darkmode}></Experience>
        <Work darkmode={darkmode}></Work>
        <GetInTouch darkmode={darkmode}></GetInTouch>
      </div>
    </div>
  );
}
