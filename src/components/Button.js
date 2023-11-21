export const Button = (props) => {
  return (
    <div className=" h-[28px] p-1.5 rounded-xl bg-[#E5E7EB] flex justify-center items-center">
      <p className="text-[#4B5563] text-medium text-sm  p-3">{props.title}</p>
    </div>
  );
};
