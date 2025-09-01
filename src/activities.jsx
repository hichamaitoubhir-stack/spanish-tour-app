import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook
import getDestinations from "./Destinations";
import actImage from "./assets/images/ozoud.webp";
import "./styles/activity.css";
import Reviews from "./reviews";

function Activities() {
  const navigate = useNavigate(); // ✅ enables page navigation
  const destinations = getDestinations();

  // ✅ This will be used to navigate when clicking image or button
  function handleNavigate(act) {
    navigate(`/destination/${act.id}`);
  }

  return (
    <>
      <div>
        <h2
          style={{ textAlign: "center", marginBlock: "25px", fontWeight: "bold" }}
        >
          Actividades de un Día
        </h2>
        <p style={{textAlign: "center"}}>Disfruta lugares magicos mas ceranos de Marrakesh</p>
      </div>

      <div className="activity-grid">
        {destinations
          // ✅ filter only the activities (type = "activity")
          .filter((act) => act.type && act.type.toLowerCase() === "activity")
          .map((act) => (
            <div key={act.id} className="activity-card">
              <div className="image-container">
                {/* ✅ Clicking the image now takes to detail page */}
                <img
                  onClick={() => handleNavigate(act)}
                  src={act.image}
                  alt={act.name}
                  className="activity-image"
                />
                {act.specialOffer && (
                  <span className="special-offer">Oferta Especial</span>
                )}
              </div>

              {/* ✅ Duration + reviews under image */}
              <div className="activity-meta">
                <span className="duration">⏱ {act.duration}</span>
                <span className="stars"> ⭐⭐⭐⭐⭐ {act.reviews} reseñas </span>
              </div>

              <p className="activity-description">{act.description}</p>

              <div className="price">
                {act.oldPrice && (
                  <span className="old-price">€{act.oldPrice}</span>
                )}
                <span className="new-price"> ${act.price} </span>/ persona
              </div>

              <div className="book-btn">
                <h3 className="free-cancellation">✅ Cancelación Gratuita</h3>
                {/* ✅ Button also navigates */}
                <button onClick={() => handleNavigate(act)}>Book</button>
              </div>
            </div>
          ))}
      </div>
      <section> <Reviews/> </section>  
    </>
  );
}

export default Activities;



