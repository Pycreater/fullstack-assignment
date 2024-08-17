const RequestButton = ({ title }: { title: string }) => {
  return (
    <button className="bg-[#1A1A1A] text-white border-2 border-white hover:bg-slate-700 p-3 text-lg rounded-lg">
      {title}
    </button>
  );
};

export default RequestButton;
