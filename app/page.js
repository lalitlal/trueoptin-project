import TrueOptinDemo from "@/app/components/TrueOptinDemo";
import BuilderDemo from "./components/BuilderDemo";
import InputForm from "./components/InputCTAForm";

export default function Home() {
  return (
    // The outer div is meant to mimic the publisher's ad div
    <>
      <BuilderDemo></BuilderDemo>
      {/* <InputForm></InputForm> */}
      {/* <div className="">
        <TrueOptinDemo></TrueOptinDemo>;
      </div> */}
    </>
  );
}
