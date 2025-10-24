// import logo from './logo.svg';
// import './App.css';
// import react from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

import Service from "./pages/Service";
import Pricing from "./pages/PricingPlan";
import Dentist from "./pages/OurDentist";
import Test from "./pages/TestimonialT";
import Appoint from "./pages/AppointmentA";
import Cont from "./pages/Contact";
import AppointmentButton from "./pages/AppointmentButton";
import {Routes, Route} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Cont" element={<Cont/>}/>
        
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/Dentist" element={<Dentist/>}/>
        <Route path="/Test" element={<Test/>}/>
        <Route path="/Appoint" element={<Appoint/>}/>
        <Route path="/AppointmentButton" element={<AppointmentButton/>}/>
        
      </Routes>
      {/* <Contact/>
      <Appointment/>
      <OurDentist/>
      <Testimonial/>
      <Appointment/>
      <Pricing/>
      <About/>
      <Service/>
      <Home/> */}
      
    </div>
  );
}

export default App;
