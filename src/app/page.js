import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Intro } from "@/components/Intro";
import { Aboutme } from "@/components/Aboutme";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { GetInTouch } from "@/components/GetInTouch";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-y-28">
      <Nav></Nav>
      <Intro></Intro>
      <Aboutme></Aboutme>
      <Skills></Skills>
      <Experience></Experience>
      <Work></Work>
      <GetInTouch></GetInTouch>
    </div>
  );
}
