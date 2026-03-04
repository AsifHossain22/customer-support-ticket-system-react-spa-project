import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main */}
      <main>
        {/* Banner */}
        <Banner />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
