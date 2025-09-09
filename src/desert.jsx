import React from "react";
import { useNavigate } from "react-router-dom"; 
import getDestinations from "./Destinations";
import './styles/fullday.css';

function Desert({tour}) {
  const navigate = useNavigate();
  const destinations = getDestinations();

  // ✅ filter tours that are desert tours
  const filteredTours = destinations.filter(tour => tour.isDesert);

  function handleImageClick(tour) {
    navigate(`/destination/${tour.id}`);
  }

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center", marginBlock: "25px", fontWeight: "bold" }}>
          Descubre los tours al desierto
        </h2>
        <p style={{ textAlign: "center" }}>
          Disfruta de los lugares mágicos en los desiertos de Marruecos
        </p>
      </div>

      <div className="tours-grid">
        {filteredTours.map((tour) => (
          <div key={tour.id} className="tour-card">
            <div className="image-container">
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

            <div className="tour-meta">
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

export default Desert;
