import React from "react";
import { Toaster } from "react-hot-toast";

import Home from "./pages/home";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Toaster position="top-right" reverseOrder={false} />
      <ContactForm />
     
      <Footer />
    </>
  );
}
