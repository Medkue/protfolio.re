import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Intro } from "@/components/Intro";
import { Aboutme } from "@/components/Aboutme";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-y-28">
      <Nav></Nav>
      <Intro></Intro>
      <Aboutme></Aboutme>
      <Skills></Skills>
    </div>
  );
}
