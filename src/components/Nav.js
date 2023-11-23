"use client";

export const Nav = (props) => {
  const toggleDarkMode = () => {
    props.setDarkmode((prev) => !prev);
  };
  const menuToggle = () => {
    props.setMenu((prev) => !prev);
  };

  return (
    <div className="w-[100%] mt-[50px] flex justify-center dark:text-white fixed z-10 h-fit bg-white dark:bg-[#030712]">
      <div className="w-[80%] flex justify-between">
        <div className="flex-row">
          <h3 className="text-3xl font-bold dark:bg-[#030712]">
            &#60;SS&#47;&#62;{" "}
          </h3>
        </div>
        <div className="hidden md:flex gap-x-10 text-base justify-center items-center dark:bg-[#030712]">
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
          <img src="/Divider.svg" />
          {props.darkmode ? (
            <img src="/moon.svg" onClick={toggleDarkMode} />
          ) : (
            <img src="/Icon Button.svg" onClick={toggleDarkMode} />
          )}
          <p className="p-[5px] bg-[#111827] rounded-lg text-white dark:bg-white dark:text-[#030712]">
            Download
          </p>
        </div>
        {props.darkmode ? (
          <img className=" md:hidden" src="/dmenu.svg" onClick={menuToggle} />
        ) : (
          <img className=" md:hidden" src="/menu.svg" onClick={menuToggle} />
        )}
      </div>
      {props.menu ? (
        <div className="w-full h-full bg-[#F3F4F6] dark:bg-[#030712]  flex-col gap-[20px] p-[20px] fixed top-[0] md:hidden">
          <button onClick={menuToggle}>kk</button>
          <div className="flex flex-col gap-[20px] ">
            <h3 className="text-3xl font-bold dark:bg-[#030712]">
              &#60;SS&#47;&#62;{" "}
            </h3>
            <hr></hr>
            <p onClick={menuToggle}>About</p>
            <p>Work</p>
            <p>Testimonials</p>
            <p>Contact</p>
            <hr></hr>
            <div className="flex justify-between" onClick={toggleDarkMode}>
              <p>Switch theme</p>
              <img src="/Icon Button.svg" />
            </div>
            <p className=" flex p-[5px] bg-[#111827] rounded-lg text-white dark:bg-white dark:text-[#030712] p-[10px] justify-center">
              Download CV
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
