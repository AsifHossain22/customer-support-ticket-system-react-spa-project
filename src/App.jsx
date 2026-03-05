import React, { Suspense } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Tickets from "./components/Tickets/Tickets";
import Loader from "./components/Loader/Loader";

// LoadTickets
const ticketData = async () => {
  const res = await fetch("/ticketsData.json");
  return res.json();
};

const App = () => {
  // PromiseFromTicketData
  const ticketPromise = ticketData();
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
          <Tickets ticketPromise={ticketPromise} />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
