export const Button = (props) => {
  return (
    <div className="w-[75px] h-[28px] rounded-xl bg-[#E5E7EB] flex justify-center items-center">
      <p className="text-[#4B5563] text-medium text-sm">{props.title}</p>
    </div>
  );
};
