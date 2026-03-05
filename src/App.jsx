import React, { Suspense, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Tickets from "./components/Tickets/Tickets";
import Loader from "./components/Loader/Loader";
// import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  // AllTicketsState
  const [allTickets, setAllTickets] = useState([]);

  // SelectedTicketState
  const [selectedTickets, setSelectedTickets] = useState([]);

  // ResolvedTicketsState
  const [resolvedTicketsCount, setResolvedTicketsCount] = useState([]);

  useEffect(() => {
    fetch("/ticketsData.json")
      .then((res) => res.json())
      .then((data) => setAllTickets(data));
  }, []);

  // HandleSelectedTicketState
  const handleSelectedTicket = (ticket) => {
    const isExist = selectedTickets.find((item) => item.id === ticket.id);

    if (!isExist) {
      setSelectedTickets([...selectedTickets, ticket]);
      // alert("Ticket added to Task Status successfully!");

      // SweetAlertForAddedTicketToTaskStatus
      // Swal.fire({
      //   title: "Ticket added to Task Status successfully!",
      //   icon: "success",
      //   confirmButtonColor: "#632EE3",
      // });

      // ReactToastify
      toast.success("Ticket added to Task Status!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
    } else {
      // alert("This ticket is already added!");
      // SweetAlertForWarning
      // Swal.fire({
      //   title: "This ticket is already added!",
      //   icon: "warning",
      //   confirmButtonColor: "#9F62F2",
      // });

      // ReactToastify
      toast.warn("This ticket is already added!", {
        position: "top-center",
        autoClose: 2000,
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

    // RemoveFromMainTicketsContainer
    const remainingMainTickets = allTickets.filter(
      (item) => item.id !== ticket.id,
    );
    setAllTickets(remainingMainTickets);

    // AddToResolvedTask
    setResolvedTicketsCount([...resolvedTicketsCount, ticket]);

    // SweetAlertForMovedTicketToResolvedTask
    // Swal.fire({
    //   title: "Task Resolved!",
    //   icon: "success",
    //   confirmButtonColor: "#54CF68",
    // });

    // ReactToastify
    toast.info("Task Resolved successfully!", {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
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
            allTickets={allTickets}
            handleSelectedTicket={handleSelectedTicket}
            selectedTickets={selectedTickets}
            handleResolvedTicket={handleResolvedTicket}
            resolvedTicketsCount={resolvedTicketsCount}
          />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

      {/* ToastContainer */}
      <ToastContainer />
    </>
  );
};

export default App;
