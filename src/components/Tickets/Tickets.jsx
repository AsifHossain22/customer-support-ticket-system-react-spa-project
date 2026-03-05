import React, { use } from "react";
import Ticket from "../Ticket/Ticket";

const Tickets = ({ ticketPromise }) => {
  const ticketData = use(ticketPromise);
  //   console.log(ticketData);

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-0 pb-20">
      <div className="grid grid-cols-4 gap-4 md:gap-8">
        {/* TicketsContainer */}
        <div className="col-span-full lg:col-span-3">
          <h2 className="text-[#34485A] text-2xl font-semibold pb-4">
            Customer Tickets
          </h2>

          {/* TicketContainer */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {ticketData.map((ticket) => (
              <Ticket ticket={ticket} />
            ))}
          </div>
        </div>

        {/* TaskStatusContainer */}
        <div className="col-span-full lg:col-span-1">
          {/* TaskStatusContainer */}
          <div className="p-4 mb-4">
            <h4 className="text-xl lg:text-2xl font-semibold">Task Status</h4>
            <p className="mt-2">Nothing found</p>
          </div>

          {/* ResolvedTask */}
          <div className="p-4">
            <h4 className="text-xl lg:text-2xl font-semibold">Resolved Task</h4>
            <p className="mt-2">Nothing found</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
