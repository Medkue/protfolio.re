export const Nav = () => {
  return (
    <div className="w-[80%] mt-[50px] flex justify-between">
      <div className="felx-row">
        <h3 className="text-3xl font-bold">&#60;SS&#47;&#62; </h3>
      </div>
      <div className="hidden md:flex gap-x-10 text-base justify-center items-center">
        <p>About</p>
        <p>Work</p>
        <p>Testimonials</p>
        <p>Contact</p>
        <img src="/Divider.svg" />
        <img src="/Icon Button.svg" />
        <p className="p-[5px] bg-[#111827] rounded-lg text-white">Download</p>
      </div>
    </div>
  );
};
