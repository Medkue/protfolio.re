import { Button } from "./Button";
import { Javascript } from "./Javacript";

export const Skills = () => {
  let data = [
    {
      text: "blabla",
      src: <Javascript />,
    },
    {
      text: "blabla",
      src: <Javascript />,
    },
    {
      text: "blabla",
      src: <Javascript />,
    },
    {
      text: "blabla",
      src: <Javascript />,
    },
    {
      text: "blabla",
      src: <Javascript />,
    },
    {
      text: "blabla",
      src: <Javascript />,
    },
    {
      text: "blabla",
      src: <Javascript />,
    },
    {
      text: "blabla",
      src: <Javascript />,
    },
  ];

  return (
    <div className="w-[80%] flex flex-col gap-[30px] items-center pb-[50px]">
      <div className="flex flex-row gap-[100px]">
        {data.map((item) => {
          return (
            <div className="flex flex-col gap-[10px]">
              {item.src}
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-[50px]">
        <Button title="Skills"></Button>
      </div>
      <p className="font-normal text-[#4B5563] text-xl">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="w-[100%] flex flex-col  gap-[50px] items-center ">
        <div className="flex w-[100%] justify-center ">
          <div className="flex flex-col items-center grow basis-0  ">
            <div className=" w-[64px] h-[64px]">
              <img src="/icon-javscript.png" />
            </div>
            <p className="font-normal text-lg text-[#4B5563]">Javascript</p>
          </div>
          <div className="flex flex-col items-center grow basis-0  ">
            <div className=" w-[64px] h-[64px]">
              <img src="/icon-javscript.png" />
            </div>
            <p className="font-normal text-lg text-[#4B5563]">Javascript</p>
          </div>
          <div className="flex flex-col items-center grow basis-0 ">
            <div className=" w-[64px] h-[64px]">
              <img src="/icon-javscript.png" />
            </div>
            <p className="font-normal text-lg text-[#4B5563]">Javascript</p>
          </div>
          <div className="flex flex-col items-center grow basis-0 ">
            <div className=" w-[64px] h-[64px]">
              <img src="/icon-javscript.png" />
            </div>
            <p className="font-normal text-lg text-[#4B5563]">Javascript</p>
          </div>
          <div className="flex flex-col items-center grow basis-0  ">
            <div className=" w-[64px] h-[64px]">
              <img src="/icon-javscript.png" />
            </div>
            <p className="font-normal text-lg text-[#4B5563]">Javascript</p>
          </div>
          <div className="flex flex-col items-center grow basis-0  ">
            <div className=" w-[64px] h-[64px]">
              <img src="/icon-javscript.png" />
            </div>
            <p className="font-normal text-lg text-[#4B5563]">Javascript</p>
          </div>
          <div className="flex flex-col items-center grow basis-0 ">
            <div className=" w-[64px] h-[64px]">
              <img src="/icon-javscript.png" />
            </div>
            <p className="font-normal text-lg text-[#4B5563]">Javascript</p>
          </div>
          <div className="flex flex-col items-center grow basis-0  ">
            <div className=" w-[64px] h-[64px]">
              <img src="/icon-javscript.png" />
            </div>

            <p className="font-normal text-lg text-[#4B5563]">Javascript</p>
          </div>
        </div>
        <div className="flex w-[100%] justify-center">
          <div className="flex flex-col items-center grow basis-0  ">
            <div className=" w-[64px] h-[64px]">
              <img src="/icon-javscript.png" />
            </div>
            <p className="font-normal text-lg text-[#4B5563]">Javascript</p>
          </div>
          <div className="flex flex-col items-center grow basis-0  ">
            <div className=" w-[64px] h-[64px]">
              <img src="/icon-javscript.png" />
            </div>
            <p className="font-normal text-lg text-[#4B5563]">Javascript</p>
          </div>
          <div className="flex flex-col items-center grow basis-0 ">
            <div className=" w-[64px] h-[64px]">
              <img src="/icon-javscript.png" />
            </div>
            <p className="font-normal text-lg text-[#4B5563]">Javascript</p>
          </div>
          <div className="flex flex-col items-center grow basis-0 ">
            <div className=" w-[64px] h-[64px]">
              <img src="/icon-javscript.png" />
            </div>
            <p className="font-normal text-lg text-[#4B5563]">Javascript</p>
          </div>
          <div className="flex flex-col items-center grow basis-0  ">
            <div className=" w-[64px] h-[64px]">
              <img src="/icon-javscript.png" />
            </div>
            <p className="font-normal text-lg text-[#4B5563]">Javascript</p>
          </div>
          <div className="flex flex-col items-center grow basis-0  ">
            <div className=" w-[64px] h-[64px]">
              <img src="/icon-javscript.png" />
            </div>
            <p className="font-normal text-lg text-[#4B5563]">Javascript</p>
          </div>
          <div className="flex flex-col items-center grow basis-0 ">
            <div className=" w-[64px] h-[64px]">
              <img src="/icon-javscript.png" />
            </div>
            <p className="font-normal text-lg text-[#4B5563]">Javascript</p>
          </div>
          <div className="flex flex-col items-center grow basis-0  ">
            <div className=" w-[64px] h-[64px]">
              <img src="/icon-javscript.png" />
            </div>

            <p className="font-normal text-lg text-[#4B5563]">Javascript</p>
          </div>
        </div>
      </div>
    </div>
  );
};
