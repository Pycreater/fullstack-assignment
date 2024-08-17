import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-[#DADBF0] h-[300px] w-full flex flex-col items-center justify-center gap-8">
      <div className="font-semibold text-6xl">How can we help?</div>
      <div className="w-screen flex justify-center">
        <div className="relative w-[70%] shadow-lg">
          <input
            className="w-full p-2 pl-4 pr-10 rounded-md"
            type="text"
            placeholder="Search"
          />
          <FaArrowRight className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
