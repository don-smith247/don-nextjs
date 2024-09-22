import Image from "next/image";

const Bulb = () => {
  return <div className=" absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 ">
    <Image src={'/bulb.png'}  width={200} height={150} className=" w-full h-full" alt=""/>
  </div>;
};

export default Bulb;
