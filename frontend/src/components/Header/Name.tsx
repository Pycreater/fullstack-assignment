import { AiFillGithub } from "react-icons/ai";
const Name = () => {
  return (
    <div className="text-sm text-white flex items-center gap-2">
      <div className="bg-white rounded-2xl text-black">
        <AiFillGithub size={"24px"} />
      </div>
      <div className="font-bold text-xl">Abstract</div>
      <div className="text-lg text-white">|</div>
      <div className="text-xl">Help Center</div>
    </div>
  );
};

export default Name;
