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

  // SelectedTicketStateForTaskStatus
  const [selectedTickets, setSelectedTickets] = useState([]);

  // HandleSelectedTicketState
  const handleSelectedTicket = (ticket) => {
    const isExist = selectedTickets.find((item) => item.id === ticket.id);

    if (!isExist) {
      setSelectedTickets([...selectedTickets, ticket]);
      // alert("Ticket added to Task Status successfully!");

      // SweetAlertForSuccess
      Swal.fire({
        title: "Success!",
        text: "Ticket added to Task Status successfully!",
        icon: "success",
        confirmButtonColor: "#632EE3",
      });
    } else {
      // alert("This ticket is already added!");

      // SweetAlertForWarning
      Swal.fire({
        title: "Already Added",
        text: "This ticket is already added!",
        icon: "warning",
        confirmButtonColor: "#9F62F2",
      });
    }
  };
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main */}
      <main>
        {/* Banner */}
        <Banner />

        {/* TicketSection */}
        <Suspense fallback={<Loader />}>
          <Tickets
            ticketPromise={ticketPromise}
            handleSelectedTicket={handleSelectedTicket}
            selectedTickets={selectedTickets}
          />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
