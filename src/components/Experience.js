import { Button } from "./Button";
import { Activedot } from "./Activedot";

export const Experience = () => {
  return (
    <div className="bg-[#F9FAFB] w-full flex flex-col gap-[40px] mt-[50px] items-center pb-[50px]">
      <div className="bg-[#F9FAFB] w-full flex flex-col gap-[40px] mt-[50px] items-center">
        <div className="mt-[50px]">
          <Button title="Experience"></Button>
        </div>
        <p className="font-normal text-[#4B5563] text-xl">
          Here is a quick summary of my most recent experiences:
        </p>
        <div className="w-[60%] flex bg-white p-[32px] rounded-[12px] shadow-md">
          <div className="grow basis-0">
            <img src="/Clip path group.png"></img>
          </div>
          <div className="flex flex-col grow basis-0 gap-[15px] ">
            <p className="text-xl font-semibold text-black">
              Sr. Frontend Developer
            </p>
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                <Activedot color={"#4B5563"}></Activedot>
              </div>
              <p className="font-normal text-[#4B5563] font-inter text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                <Activedot color={"#4B5563"}></Activedot>
              </div>
              <p className="font-normal text-[#4B5563] font-inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                <Activedot color={"#4B5563"}></Activedot>
              </div>
              <p className="font-normal text-[#4B5563] font-inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                <Activedot color={"#4B5563"}></Activedot>
              </div>
              <p className="font-normal text-[#4B5563] font-inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className=" grow basis-0 flex justify-center">
            <p className="font-normal text-[#4B5563] text-base">
              Nov 2021 - Present
            </p>
          </div>
        </div>
        <div className="w-[60%] flex bg-white p-[32px] rounded-[12px] shadow-md">
          <div className="grow basis-0">
            <img src="/Clip path group.png"></img>
          </div>
          <div className="flex flex-col grow basis-0 gap-[15px] ">
            <p className="text-xl font-semibold text-black">
              Sr. Frontend Developer
            </p>
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                <Activedot color={"#4B5563"}></Activedot>
              </div>
              <p className="font-normal text-[#4B5563] font-inter text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                <Activedot color={"#4B5563"}></Activedot>
              </div>
              <p className="font-normal text-[#4B5563] font-inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                <Activedot color={"#4B5563"}></Activedot>
              </div>
              <p className="font-normal text-[#4B5563] font-inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                <Activedot color={"#4B5563"}></Activedot>
              </div>
              <p className="font-normal text-[#4B5563] font-inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className=" grow basis-0 flex justify-center">
            <p className="font-normal text-[#4B5563] text-base">
              Nov 2021 - Present
            </p>
          </div>
        </div>
        <div className="w-[60%] flex bg-white p-[32px] rounded-[12px] shadow-md">
          <div className="grow basis-0">
            <img src="/Clip path group.png"></img>
          </div>
          <div className="flex flex-col grow basis-0 gap-[15px] ">
            <p className="text-xl font-semibold text-black">
              Sr. Frontend Developer
            </p>
            <div className="flex flex-row gap-[10px]">
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                <Activedot color={"#4B5563"}></Activedot>
              </div>
              <p className="font-normal text-[#4B5563] font-inter text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className=" grow basis-0 flex justify-center">
            <p className="font-normal text-[#4B5563] text-base">
              Nov 2021 - Present
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
