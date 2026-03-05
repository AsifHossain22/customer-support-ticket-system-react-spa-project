import React, { use } from "react";
import Ticket from "../Ticket/Ticket";
import SelectedTicket from "../SelectedTicket/SelectedTicket";

const Tickets = ({
  allTickets,
  handleSelectedTicket,
  selectedTickets,
  handleResolvedTicket,
  resolvedTicketsCount,
}) => {
  //   console.log(allTickets);

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
            {allTickets.map((ticket) => (
              <Ticket
                key={ticket?.id}
                ticket={ticket}
                handleSelectedTicket={handleSelectedTicket}
              />
            ))}
          </div>
        </div>

        {/* TaskStatusContainer */}
        <div className="col-span-full lg:col-span-1">
          {/* TaskStatusContainer */}
          <div className="p-4 mb-4">
            <h4 className="text-xl lg:text-2xl font-semibold">Task Status</h4>

            {selectedTickets.length === 0 ? (
              <p className="mt-2 text-gray-400">Nothing found</p>
            ) : (
              <div>
                {/* DynamicTicket */}
                {selectedTickets.map((selectedTicket) => (
                  <SelectedTicket
                    key={selectedTicket?.id}
                    selectedTicket={selectedTicket}
                    handleResolvedTicket={handleResolvedTicket}
                    className="py-1 text-sm font-medium"
                  >
                    {selectedTicket.title}
                  </SelectedTicket>
                ))}
              </div>
            )}
          </div>

          {/* ResolvedTask */}
          <div className="p-4">
            <h4 className="text-xl lg:text-2xl font-semibold">Resolved Task</h4>
            {resolvedTicketsCount.length === 0 ? (
              <p className="mt-2 text-gray-400">Nothing found</p>
            ) : (
              <div className="mt-2 space-y-2">
                {resolvedTicketsCount.map((ticket) => (
                  <div key={ticket?.id} className="p-2 bg-[#E0E7FF] text-sm">
                    {ticket.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
