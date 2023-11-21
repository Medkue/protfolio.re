import { Button } from "./Button";

export const GetInTouch = () => {
  return (
    <div className="w-full mt-[50px] flex flex-col items-center justify-center gap-[40px] pb-[50px]">
      <div className="mt-[50px]">
        <Button title="Get in touch"></Button>
      </div>
      <p>
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      <div className="flex gap-[30px]">
        <img src="/mail.svg"></img>
        <p>reachsagarshah@gmail.com</p>
        <img src="/copy.png" />
      </div>
      <div className="flex gap-[30px]">
        <img src="/phone.png"></img>
        <p>+91 8980500565</p>
        <img src="/copy.png" />
      </div>
      <div className="flex flex-col gap-[20px] justify-center">
        <p>You may also find me on these platforms!</p>
        <div className="flex gap-[10px] justify-center">
          <img src="/n.svg" />
          <img src="/twi.svg" />
          <img src="/fig.svg" />
        </div>
      </div>
    </div>
  );
};
