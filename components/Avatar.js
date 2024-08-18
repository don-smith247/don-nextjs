import Image from "next/image";


const Avatar = () => {
  return (
    <div className=" hidden xl:flex xl:max-w-none ">
    <Image src={'/animer.png'} width={500} height={400} alt="" className=" translate-z-0 absolute -bottom-32 lg:bottom-0 lg:right-[8%]"/>
  </div>
  );
};

export default Avatar;
