import React, { Suspense, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Tickets from "./components/Tickets/Tickets";
import Loader from "./components/Loader/Loader";
import Swal from "sweetalert2";

// LoadTickets
const ticketData = async () => {
  const res = await fetch("/ticketsData.json");
  return res.json();
};

const App = () => {
  // PromiseFromTicketData
  const ticketPromise = ticketData();

  // SelectedTicketState
  const [selectedTickets, setSelectedTickets] = useState([]);

  // ResolvedTicketsState
  const [resolvedTicketsCount, setResolvedTicketsCount] = useState([]);

  // HandleSelectedTicketState
  const handleSelectedTicket = (ticket) => {
    const isExist = selectedTickets.find((item) => item.id === ticket.id);

    if (!isExist) {
      setSelectedTickets([...selectedTickets, ticket]);
      // alert("Ticket added to Task Status successfully!");

      // SweetAlertForAddedTicketToTaskStatus
      Swal.fire({
        title: "Ticket added to Task Status successfully!",
        icon: "success",
        confirmButtonColor: "#632EE3",
      });
    } else {
      // alert("This ticket is already added!");

      // SweetAlertForWarning
      Swal.fire({
        title: "This ticket is already added!",
        icon: "warning",
        confirmButtonColor: "#9F62F2",
      });
    }
  };

  // HandleResolvedTicketState
  const handleResolvedTicket = (ticket) => {
    // RemoveFromTaskStatus
    const remainingTickets = selectedTickets.filter(
      (item) => item.id !== ticket.id,
    );
    setSelectedTickets(remainingTickets);

    // AddToResolvedTask
    setResolvedTicketsCount([...resolvedTicketsCount, ticket]);

    // SweetAlertForMovedTicketToResolvedTask
    Swal.fire({
      title: "Task Resolved!",
      icon: "success",
      confirmButtonColor: "#54CF68",
    });
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Main */}
      <main>
        {/* Banner */}
        <Banner
          inProgressCount={selectedTickets.length}
          resolvedTicketsCount={resolvedTicketsCount.length}
        />

        {/* TicketSection */}
        <Suspense fallback={<Loader />}>
          <Tickets
            ticketPromise={ticketPromise}
            handleSelectedTicket={handleSelectedTicket}
            selectedTickets={selectedTickets}
            handleResolvedTicket={handleResolvedTicket}
            resolvedTicketsCount={resolvedTicketsCount}
          />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
