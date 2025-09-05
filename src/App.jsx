import React from "react";

import Home from "./pages/home";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ContactForm />
      <Footer />
    </>
  );
}
