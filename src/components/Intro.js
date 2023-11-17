import { Activedot } from "./Activedot";

export const Intro = () => {
  return (
    <div className="w-[80%] flex flex-row justify-center p-[10px]">
      <div className="flex-col gap-[50px]">
        <div className="flex justify-center flex-col gap-[40px]">
          <p className="text-3xl font-bold">Hi, I’m Chomo 👋</p>
          <p className="w-[80%] font-normal text-[#4B5563] font-inter">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <div className="flex flex-col gap-[8px]">
            <div className="flex flex-row gap-[10px]">
              <img src="/Icon.svg" />
              <p className="font-normal text-[#4B5563] font-inter">
                Ulaanbaatar Mongolia
              </p>
            </div>
            <div className="flex flex-row gap-[18px] ml-[8px]">
              {/* <img src="/icon-dot-emerald-500.svg" /> */}
              <div className="w-[ 24px] h-[24px] flex justify-center items-center">
                <Activedot color={"#10B981"}></Activedot>
              </div>
              <p className="font-normal text-[#4B5563] font-inter">
                Unavailable for you
              </p>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <img src="/n.svg" />
            <img src="/twi.svg" />
            <img src="/fig.svg" />
          </div>
        </div>
      </div>
      <div className="w-[600px] h-[320px] relative mt-[50px]">
        <img className="w-[100%] h-[100%]" src="/Background.png"></img>
        <div className="w-[100%] h-[100%] flex justify-center items-center bg-white absolute -top-10 -left-10">
          <img className="w-[95%] h-[95%] object-cover  " src="/catcat.jpeg" />
        </div>
      </div>
    </div>
  );
};
