import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Intro } from "@/components/Intro";

export default function Home() {
  return (
    <div className="w-100vw flex flex-col justify-center gap-y-28">
      <div>
        <Nav></Nav>
      </div>
      <div>
        <Intro></Intro>
      </div>
    </div>
  );
}
