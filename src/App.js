import React from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <p className="vh-100">Event Management Circle</p>
      </div>
      <Footer />
    </div>
  );
};

export default App;
