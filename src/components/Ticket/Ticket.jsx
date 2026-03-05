import React from "react";
import { FaCalendar } from "react-icons/fa6";

const Ticket = ({ ticket, handleSelectedTicket }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;
  return (
    <section onClick={() => handleSelectedTicket(ticket)}>
      {/* SingleTicket */}
      <div className="bg-white rounded-sm p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          {/* Title */}
          <span className="text-[#001931] text-base lg:text-lg font-semibold">
            {title}
          </span>
          {/* Status */}
          <span className="badge badge-success font-medium text-xs lg:text-base">
            {status}
          </span>
        </div>
        {/* Description */}
        <p className="text-[#627382] pt-2 pb-4 w-[80%] text-sm lg:text-base">
          {description}
        </p>
        {/* Footer */}
        <div className="flex justify-between items-center">
          <div className="flex-col md:flex-row items-center gap-4">
            <span className="text-sm text-[#627382] block">{id}</span>
            <span>{priority}</span>
          </div>
          <div className="flex-col md:flex-row items-center gap-4">
            <span className="text-sm text-[#627382] font-medium">
              {customer}
            </span>
            <span className="text-sm text-[#627382] flex items-center gap-4">
              <span>
                <FaCalendar />
              </span>
              <span>{createdAt}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ticket;
