import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DestinationDetail.css"; // ✅ import CSS file
import Footer from "../footer";
import WhatsAppButton from "../whatsAppButton";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { FaClock, FaMapMarkerAlt, FaRoute, FaUserFriends, FaCar } from "react-icons/fa";
import TourDetails from "./Tourdetails";
import Stars from "../stars";

 function DestinationDetail({ destinacion }) {

const [name, setName] = React.useState("");
const [phone, setPhone] = React.useState("");
const [guests, setGuests] = React.useState(1);
const [date, setDate] = React.useState("");

const [showModal, setShowModal] = React.useState(false);



  const { id } = useParams();
  const navigate = useNavigate();

    React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dest = destinacion.find((d) => String(d.id) === id);

  if (!dest) {
    return (
      <div className="destination-detail-container">
        <p>Tour not found.</p>
        <button className="destination-detail-back-btn" onClick={() => navigate("/")}>
          Go back
        </button>
      </div>
    );
  }

  return (
    <>
    
    <div className="grid-booking">
  

    <div className="destination-detail-container">
    <div className="image-continner">
    {dest.images && dest.images.length > 0 ? (
  <div className="image-grid">
    {dest.images.slice(0, 4).map((img, i) => (
      <div key={i} className="image-wrapper">
        <img 
          src={img}  
          alt={`${dest.name} ${i + 1}`} 
          className="grid-image" 
        />
        {i === 0 && (  // only show button on the first image
          <button
            className="back-button-overlay"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
        )}
      </div>
    ))}
  </div>
) : (
  <p>No additional images available for this tour.</p>
)}
  </div>
{/* ----------model----------- */}
{showModal && (
  <div className="modal-overlay" onClick={() => setShowModal(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={() => setShowModal(false)}>✖</button>
      <div className="modal-images">
        {dest.images.map((img, i) => (
          <img key={i} src={img} alt={`${dest.name} ${i + 1}`} />
        ))}
      </div>
    </div>
  </div>
)}
{/* --------------model--------------- */}
   <div className="tour-info-row">
  <h2>{dest.name}</h2>
  <span className="price">  <span style={{color :"#000"}}>Precio</span> : ${dest.price}</span>
  <div className="reviews">
  <Stars rating={5} /> ({dest.reviews})
</div>
  <div>
    <button
     
      onClick={() => setShowModal(true)}
    >
      Ver más fotos...
    </button>
  </div>
</div>
  </div>



  
            

  {/*    ======formula====        */}

  
   <div className="booking-formula">
  <h2>Reserva este tour</h2> 

  <label htmlFor="name">Nombre:</label>
  <input
    type="text"
    id="name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Tu nombre"
  />

  <label htmlFor="phone">Número de teléfono:</label>
  <input
    type="tel"
    id="phone"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    placeholder="Tu número de teléfono"
  />

  <label htmlFor="guests">Número de personas:</label>
  <input
    type="number"
    id="guests"
    min="1"
    value={guests}
    onChange={(e) => setGuests(Number(e.target.value))}
  />

  <label htmlFor="date">Selecciona la fecha:</label>
  <input
    type="date"
    id="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
  />

 <p>
  Precio total: ${dest.price} × {guests} persona{guests > 1 ? "s" : ""} =
  <span style={{ color: dest.price * guests > 0 ? "green" : "inherit" }}>
    ${dest.price * guests}
  </span>
</p>
<br />


  <button 
    onClick={() =>
      alert(
        `¡Reserva enviada!\nNombre: ${name}\nTeléfono: ${phone}\nPersonas: ${guests}\nFecha: 
        ${date}\nTotal: $${dest.price * guests}`
      )
    }
  >
    Reservar ahora
  </button>
  {/* ---------------paypal */}

     
</div>


 {/* Endformula */}
    </div>
       
            <section><WhatsAppButton /></section>
        
    
     <TourDetails tour={dest} />
     <div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Explora desierta -- All rights reserved.</p>
      </div>
     </div>
    </>
  );
}


export default DestinationDetail