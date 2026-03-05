import React from "react";

const SelectedTicket = ({ selectedTicket }) => {
  const { title } = selectedTicket;
  return (
    <div className="bg-white rounded-sm p-4 mt-2 shadow-sm">
      <h2 className="text-[#001931] text-sm lg:text-lg pb-2">{title}</h2>
      <button className="btn w-full px-4 py-3 bg-[#02A53B] hover:bg-transparent border-2 border-[#02A53B] text-white hover:text-[#02A53B] transition-colors duration-300 font-semibold text-xs lg:text-base">
        Complete
      </button>
    </div>
  );
};

export default SelectedTicket;
