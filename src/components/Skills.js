import { Button } from "./Button";
import { Javascript } from "./Javacript";

export const Skills = () => {
  let data = [
    {
      text: "blabla",
      src: "/catcat.jpeg",
    },
    {
      text: "blabla",
      src: "/icon-javscript.png",
    },
    {
      text: "blabla",
      src: "/icon-javscript.png",
    },
    {
      text: "blabla",
      src: "/icon-javscript.png",
    },
    {
      text: "blabla",
      src: "/icon-javscript.png",
    },
    {
      text: "blabla",
      src: "/icon-javscript.png",
    },
    {
      text: "blabla",
      src: "/icon-javscript.png",
    },
    {
      text: "blabla",
      src: "/icon-javscript.png",
    },
    {
      text: "blabla",
      src: "/icon-javscript.png",
    },
    {
      text: "blabla",
      src: "/icon-javscript.png",
    },
    {
      text: "blabla",
      src: "/icon-javscript.png",
    },
    {
      text: "blabla",
      src: "/icon-javscript.png",
    },
    {
      text: "blabla",
      src: "/icon-javscript.png",
    },
    {
      text: "blabla",
      src: "/icon-javscript.png",
    },
    {
      text: "blabla",
      src: "/icon-javscript.png",
    },
    {
      text: "blabla",
      src: "/icon-javscript.png",
    },
  ];

  return (
    <div className="w-[80%] flex flex-col gap-[50px] items-center pb-[50px] dark:bg-[#030712]">
      <div className="mt-[50px]">
        <Button title="Skills"></Button>
      </div>
      <p className="font-normal text-[#4B5563] text-xl">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="w-full grid grid-cols-3 sm:grid-cols-8 gap-[100px] justify-center">
        {data.map((item) => {
          return (
            <div className="flex w-[64px] h-[64px] flex-col gap-[10px] items-center">
              <img className="w-[64px] h-[64px]" src={item.src} />
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
