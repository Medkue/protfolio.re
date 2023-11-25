import { Button } from "./Button";

export const GetInTouch = (props) => {
  return (
    <div className="w-full mt-[50px] flex flex-col items-center justify-center gap-[40px] pb-[50px]">
      <div className="mt-[50px] flex justify-center">
        <Button title="Get in touch"></Button>
      </div>
      <p>
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      <div className="flex justify-center gap-[30px]">
        {props.darkmode ? <img src="/dmail.svg" /> :
          <img className="w-[32px] h-[32px]" src="/mail.svg"></img>}
        <p>reachsagarshah@gmail.com</p>
        {props.darkmode ? <img src="/dcopy.svg" /> :
          <img className="w-[32px] h-[32px]" src="/copy.png" />}
      </div>
      <div className="flex gap-[30px]">
        {props.darkmode ? <img src="/dcall.svg" /> :
          <img className="w-[32px] h-[32px]" src="/phone.png"></img>}
        <p>+91 8980500565</p>
        {props.darkmode ? <img src="/dcopy.svg" /> :
          <img className="w-[32px] h-[32px]" src="/copy.png" />}
      </div>
      <div className="flex flex-col gap-[20px] items-center">
        <p>You may also find me on these platforms!</p>
        {props.darkmode ? <div className="flex gap-[10px] justify-center">
          <img src="/dgit.svg" />
          <img src="/dtwi.svg" />
          <img src="/dfig.svg" />
        </div> :
          <div className="flex gap-[10px] justify-center">
            <img src="/n.svg" />
            <img src="/twi.svg" />
            <img src="/fig.svg" />
          </div>}
      </div>
    </div>
  );
};
