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

import destinacion from "./data/destination";

import DestinationDetail from "./components/DestinationDetail";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";




function App() {
  const destinations = getDestinations();
  const [open, setOpen] = React.useState(false);

  
  
function handleBookbutton(){
    alert('button is Clicked')
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
          <div className="right-section"></div>
          <div className="social-icons">
            <span className="whatsapp">
              <div className="search-box">
                <input type="text" placeholder="Inserte palabra clave" />
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className="phone-section">
                <i className="fab fa-whatsapp"></i> +212 606 12 50 22
              </div>
            </span>
            <div>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
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
            <li><Link to="/" className="active">Inicio</Link></li>
            <li><a href="#">Tours al desierto</a></li>
            <li><a href="#">Excursiones de un día</a></li>
            <li><a href="#">Actividades en Marrakech</a></li>
            <li><a href="#">Contacto</a></li>
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
              <Intro />

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
                        <span className="stars">⭐⭐⭐⭐⭐ {dest.reviews} reseñas</span>
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
              <section><Tours duration="1 day" /></section>
              <section><Activities /></section>
                      
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