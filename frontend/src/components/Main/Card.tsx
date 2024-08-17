interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-[#F4F6F8] rounded-lg border border-[#B5BFCC] shadow-md h-[150px] w-[400px]">
      <div className="font-semibold p-2">{title}</div>
      <hr />
      <div className="p-2">{description}</div>
    </div>
  );
};

export default Card;
