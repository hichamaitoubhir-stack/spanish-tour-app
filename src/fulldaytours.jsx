import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate
import getDestinations from "./Destinations";
import fulldayimage from "./assets/images/marrakesh.png";
import './styles/fullday.css';

function Tours({ duration }) {
  const navigate = useNavigate(); // ✅ hook to navigate
  const destinations = getDestinations();

  // filter by duration
  const filteredTours = destinations.filter(tour =>
    tour.duration.startsWith(duration)
  );

  function handleImageClick(tour) {
    // ✅ navigate to the same detail page as Popular Destinations
    navigate(`/destination/${tour.id}`);
  }

  return (
    <>
      <div>
        
        <h2 style={{ textAlign: "center", marginBlock: "25px", fontWeight: "bold" }}>
           Descubre el tours del Dia entero
        </h2>
        
        <p style={{textAlign: "center"}}>Disfruta lugares magicos mas ceranos de Marrakesh</p>
      </div>

      <div className="tours-grid">
        {filteredTours.map((tour) => (
          <div key={tour.id} className="tour-card">
            <div className="image-container">
              {/* ✅ clicking image goes to detail page */}
              <img 
                onClick={() => handleImageClick(tour)}
                src={tour.image}
                alt={tour.name}
                className="tour-image"
              />
              {tour.specialOffer && (
                <span className="special-offer">Oferta Especial</span>
              )}
            </div>

            {/* duration + reviews */}
            <div className="cardtour-meta">
              <span className="duration">⏱ {tour.duration}</span>
              <span className="stars"> ⭐⭐⭐⭐⭐ {tour.reviews} reseñas </span>
            </div>

            <p className="tour-description">{tour.description}</p>

            <div className="price">
              {tour.oldPrice && <span className="old-price">€{tour.oldPrice}</span>}
              <span className="new-price"> ${tour.price} </span>/ persona
            </div>

            <div className="book-btn">
              <h3 className="free-cancellation">✅ Cancelación Gratuita</h3>
              <button onClick={() => handleImageClick(tour)}>Book</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Tours;
