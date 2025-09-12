import "./app.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import  getDestinations  from "./Destinations";
import tourLogo from './assets/images/tourLogo.png'
import React from "react";
import Intro from "./intro";
import Tours from "./fulldaytours";
import Footer from "./footer";
import WhatsAppButton from "./whatsAppButton";
import Activities from "./activities";
import Desert from "./desert";
import destinacion from "./data/destination";
import Contact from "./contact";
import SearchBox from "./components/SearchBox";
import DestinationDetail from "./components/DestinationDetail";
import { useNavigate } from "react-router-dom";
import {  FaWhatsapp, FaInstagram } from "react-icons/fa";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { FileText, CheckCircle, XCircle, Map, Scale , Info, ShieldAlert, ScrollText } from "lucide-react";
import { FaHome, FaUmbrellaBeach, FaHiking, FaCity, FaEnvelope } from "react-icons/fa";
import "./styles/Topbar.css";
import Stars from "./stars";
import ReactCountryFlag from "react-country-flag";




function App() {
  const destinations = getDestinations();
  const [open, setOpen] = React.useState(false);
  const [lang, setLang] = React.useState("ES");

 function scrollToSection(e, id) {
  e.preventDefault();
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
} 
  
function handleBookbutton(){
    alert('button is Clicked')
}


function handleSelect(item) {
// do what you want when a tour is selected
// navigate, show details, etc. For this demo we just alert
  navigate(`/tour/${item.id}`);
}
   return (
    <>
      <>
      {/* paypal script  */}
         <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_ID" }}>
      {/* your routes / layout */}
        
      {/* ================= HEADER ================= */}
      <section className="header">
        {/* --------- Top Bar --------- */}
      <div className="top-bar">
 





  <div className="left-section">
    {/* Search Box */}
    <SearchBox 
      items={destinations} 
      minChars={1} 
      placeholder="Inserte palabra clave" 
      onSelect={handleSelect} 
    />
  </div>

  <div className="social-icons">
    {/* Phone Section */}
    <div className="phone-section">
       <FaWhatsapp className="icon whatsapp" />
       <div className="whatsapp-grid">
        <span>+212 606 125 022</span>
        <p>Siempre Disponsible</p>
        </div>
    </div>

    {/* Instagram */}
    <div className="instagram-section">
      <FaInstagram className="icon instagram" />
    </div>
  </div>
    {/* Language icons */}
  
</div>


        {/* --------- Bottom Navigation --------- */}
        <nav className="bottom-nav">
          <div className="logo">
            <img src={tourLogo} alt="Tour Logo" />
          </div>

          <div className="menu-toggle" onClick={() => setOpen(!open)}>
            <i className="fa-solid fa-bars"></i>
          </div>

          {/* ✅ Used <Link> instead of <a> for Home page navigation */}
       

<ul className={`nav-links ${open ? "open" : ""}`}>
  <li>
    <Link to="/" className="nav-item">
      <span className="nav-icon-wrap"><FaHome className="nav-icon" /></span>
      <span className="nav-label">Inicio</span>
    </Link>
  </li>

  <li>
    <a
      href="#desert-tours"
      onClick={(e) => scrollToSection(e, "desert-tours")}
      className="nav-item"
    >
      <span className="nav-icon-wrap"><FaUmbrellaBeach className="nav-icon" /></span>
      <span className="nav-label">Tours al desierto</span>
    </a>
  </li>

  <li>
    <a
      href="#one-day-excursions"
      onClick={(e) => scrollToSection(e, "one-day-excursions")}
      className="nav-item"
    >
      <span className="nav-icon-wrap"><FaHiking className="nav-icon" /></span>
      <span className="nav-label">Excursiones de un día</span>
    </a>
  </li>

  <li>
    <a
      href="#marrakech-activities"
      onClick={(e) => scrollToSection(e, "marrakech-activities")}
      className="nav-item"
    >
      <span className="nav-icon-wrap"><FaCity className="nav-icon" /></span>
      <span className="nav-label">Actividades en Marrakech</span>
    </a>
  </li>

  <li>
    <a
      href="#contact"
      onClick={(e) => scrollToSection(e, "contact")}
      className="nav-item"
    >
      <span className="nav-icon-wrap"><FaEnvelope className="nav-icon" /></span>
      <span className="nav-label">Contacto</span>
    </a>
  </li>
</ul>

        </nav>
      </section>

      {/* ================= ROUTES ================= */}
      <Routes>
        {/* ✅ Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <section><Intro /></section>
               <section id="one-day-excursions"><Tours duration="1 day" /></section>
              {/* ================= POPULAR DESTINATIONS ================= */}
              <section className="popular-destinations">
                <h2>Destinos Populares</h2>
                <p style={{textAlign:"center"}}>Un buen servicio en todos nuestros tours conmigos</p>
                <div className="destinations-grid">
            
            
                  {destinations.map((dest) => (
                    <div key={dest.id} className="destination-card">
                      <div className="image-container">
                        {/* ✅ Image is now clickable and redirects to /destination/:id */}
                        <Link to={`/destination/${dest.id}`}>
                          <img
                            src={dest.image}
                            alt={dest.name}
                            className="destination-image"
                          />
                        </Link>

                        {/* ✅ Show special offer if exists */}
                        {dest.specialOffer && (
                          <span className="special-offer">Oferta Especial</span>
                        )}
                      </div>

                      {/* ✅ Added meta info under image */}
                      <div className="card-meta">
                        <span className="duration">⏱ {dest.duration}</span>
                        <span className="stars"><Stars rating={4} />  {dest.reviews} reseñas</span>
                      </div>

                      <p className="destination-description">{dest.description}</p>

                      {/* ✅ Show price with old/new formatting */}
                      <div className="price">
                        {dest.oldPrice && (
                          <span className="old-price">€{dest.oldPrice}</span>
                        )}
                        <span className="new-price">${dest.price}</span> / persona
                      </div>

                      <div className="book-btn">
                        <h3 className="free-cancellation">✅ Cancelación Gratuita</h3>
                        <button onClick={handleBookbutton}>Book</button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ✅ Extra sections remain the same */}
                <section  id="desert-tours"><Desert/></section>
              <section id="marrakech-activities"><Activities /></section>
              <section id="contact" ><Contact/></section>
              <section><Footer /></section>
              <section><WhatsAppButton /></section>
            </>
          }
        />

        {/* ✅ Destination detail page route */}
        <Route
          path="/destination/:id"
          element={<DestinationDetail destinacion={destinacion}  />}
          
        />
       
      </Routes>

      </PayPalScriptProvider>
      {/* end paypal script */}
    </>
    </>
  )
}

export default App;