import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DestinationDetail.css"; // ✅ import CSS file
import Footer from "../footer";
import WhatsAppButton from "../whatsAppButton";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { FaClock, FaMapMarkerAlt, FaRoute, FaUserFriends, FaCar } from "react-icons/fa";
export default function DestinationDetail({ destinacion }) {

const [name, setName] = React.useState("");
const [phone, setPhone] = React.useState("");
const [guests, setGuests] = React.useState(1);
const [date, setDate] = React.useState("");




  const { id } = useParams();
  const navigate = useNavigate();

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
  

   {/* formula */}



    <div className="destination-detail-container">
      <button
        className="destination-detail-back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <h1 className="destination-detail-name">{dest.name}</h1>

      <img
        src={dest.image}
        alt={dest.name}
        className="destination-detail-image"
      />

      <p className="destination-detail-description">{dest.description}</p>
      <p className="destination-detail-description">{dest.extended}</p>

      <h2 className="destination-detail-price">
        Price: ${dest.price} / person
      </h2>
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
        
     <div className="tour-info">

  <span>
        <h3>
          <FaClock className="icon" />
          Duración
        </h3>
        <p>6 horas</p>
      </span>

      <span>
        <h3>
          <FaMapMarkerAlt className="icon" />
          Salida
        </h3>
        <p>Marrakech</p>
      </span>

      <span>
        <h3>
          <FaRoute className="icon" />
          Destino
        </h3>
        <p>Ourika valley</p>
      </span>

      <span>
        <h3>
          <FaUserFriends className="icon" />
          Tipo del tour
        </h3>
        <p>Privado</p>
      </span>

      <span>
        <h3>
          <FaCar className="icon" />
          Recogida
        </h3>
        <p>Incluido</p>
      </span>

<div className="tour-description">
<div className="tour-description-left">
<h4>Description</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </p>
  <h4>Incluido</h4>
  <li>bebidas</li>
  <li>guia local</li>
  <li>transportante</li>
  <h4>No incluido</h4>
  <li>guia official</li>
  <li>Dasayuno</li>
  </div>
 <div className="tour-description-right"> 
 <h2>Lo mas adactado</h2>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
  </p>
  <h4>Tragido del tour </h4>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
</p>
  </div>  
</div>
<h3 style={{

  textAlign: "center",
    backgroundColor: "#574f4fff",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "10px",
    fontSize: "1rem",
    fontWeight: "600",
    letterSpacing: "1px",
    margin: "20px 0",

}}>Dejanos un Comentario </h3>
<div className="deja-resena">
      <form action="">
        
        <input type="text" placeholder="Nombre" />
        <textarea name="" id="" placeholder="tu comentario"></textarea>
       
      </form>
       <button>Submit</button>
      <div className="commentarios">
        <h5 style={{padding : "2px", background: "#585454ff", width :"50%", paddingLeft:"5px"}}>Cathrica jarra</h5>
        <p>Gracias , pasabamos un dia perfect con el chofer , muy amable y simpatico</p>
      </div>
      <div className="commentarios">
        <h5 style={{padding : "2px", background: "#585454ff", width :"50%", paddingLeft:"5px"}}>Ismail</h5>
        <p>Gracias , pasabamos un dia perfect con el chofer , muy amable y simpatico</p>
      </div>
      


</div>
     </div>
     <div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Explora desierto -- All rights reserved.</p>
      </div>
     </div>
    </>
  );
}
