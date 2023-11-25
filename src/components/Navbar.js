"use client";

export const Nav = (props) => {
  const toggleDarkMode = () => {
    props.setDarkmode((prev) => !prev);
  };
  return (
    <div className="w-[100%] mt-[50px] flex justify-center dark:text-white fixed z-10 h-fit bg-white dark:bg-[#030712]">
      <div className="w-[80%] flex justify-between">
        <div className="flex-row">
          <h3 className="text-3xl font-bold text-[#111827] dark:bg-[#030712]">
            &#60;SS&#47;&#62;{" "}
          </h3>
        </div>
        <div className="hidden md:flex gap-x-10 text-base justify-center items-center dark:bg-[#030712]">
          <p className="text-[#4B5563]">About</p>
          <p className="text-[#4B5563]">Work</p>
          <p className="text-[#4B5563]">Testimonials</p>
          <p className="text-[#4B5563]">Contact</p>
          <img src="/Divider.svg" />
          {props.darkmode ? (
            <img src="/moon.svg" onClick={toggleDarkMode} />
          ) : (
            <img src="/Icon Button.svg" onClick={toggleDarkMode} />
          )}
          <p className="p-[5px] bg-[#111827] rounded-lg text-white text-[#4B5563] dark:bg-white dark:text-[#030712]">
            Download
          </p>
        </div>
        {props.darkmode ? (
          <img className="flex md:hidden" src="/dmenu.svg" />
        ) : (
          <img className=" md:hidden" src="/menu.svg" />
        )}
      </div>
    </div>
  );
};
