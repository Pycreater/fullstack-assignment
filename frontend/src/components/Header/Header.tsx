import Name from "./Name";
import RequestButton from "./RequestButton";

const Header = () => {
  return (
    <div className="bg-black flex justify-between rounded-t-2xl mt-1 items-center mx-auto p-8 shadow-2xl">
      <div className="pl-16 cursor-pointer">
        <Name />
      </div>
      <div className="pr-16 cursor-pointer">
        <RequestButton title="Submit a request" />
      </div>
    </div>
  );
};

export default Header;
