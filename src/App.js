import React from 'react';
import Navbar from "./Components/Navbar";
import LoginForm from "./pages/LoginForm";
import TicketForm from "./pages/TicketForm";
import Tickets from "./pages/Tickets";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/NotFound";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';


function App() {

  return (
    <>


      <Router>

        <Navbar />
        <Routes>


          <Route exact path="/" element={<LoginForm />}></Route>
          <Route exact path="/TicketForm" element={<TicketForm />}></Route>
          <Route exact path="/Welcome" element={<Welcome />}></Route>
          <Route exact path="/Tickets/Ticket" element={<Tickets />}></Route>
          <Route exact path="/Tickets/TicketForm" element={<Tickets />}></Route>
          <Route path='*' element={<NotFound />}></Route>


        </Routes>


        <Footer />
      </Router>


    </>
  );
}

export default App;
