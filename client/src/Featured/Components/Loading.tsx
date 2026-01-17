"use client";


const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 w-full gap-4">

      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-[#db1215] border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-[14px] font-medium text-gray-500 animate-pulse uppercase tracking-widest">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
