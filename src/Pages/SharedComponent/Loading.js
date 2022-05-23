import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-96">
        <div className="flex items-center justify-center ">
      <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
    </div>
  );
};

export default Loading;
