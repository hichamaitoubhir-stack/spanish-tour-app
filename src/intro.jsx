import Marrakesh from "./assets/images/marrakesh.jpeg";
import "./styles/intro.css"
import desert from "./assets/images/background.png"


function Intro (){

return (
    <>
         <section className="intro-grid">
            
            <section className="intro">
                <img src={desert} alt="Marrakech" className="intro-image" />
                <div className="intro-content">
                    <br />
                    <h2>#1 <br/> Viaja sin preocupaciones y crea recuerdos inolvidables</h2>
                    <p>"Miles de viajeros satisfechos nos recomiendan"</p>
                    <button className="intro-btn">Comienza Tu Viaje Hoy</button>
                </div>
            </section>

          </section>
           <div className="intro-bottom">
                <div className="feature">
                    <i className="fa-solid fa-check"></i>
                    <div>
                    <h4>Cancelación gratuita</h4>
                    <p>Posibilidad de anular la reserva hasta 48h</p>
                    </div>
                </div>

                <div className="feature">
                    <i className="fa-solid fa-star"></i>
                    <div>
                    <h4>Reserva tu plaza con el 20%</h4>
                    <p>Abona el resto el mismo día de la excursión</p>
                    </div>
                </div>

                <div className="feature">
                    <i className="fa-solid fa-heart"></i>
                    <div>
                    <h4>Satisfacción garantizada</h4>
                    <p>Un buen servicio en todos nuestros tours conmigos</p>
                    </div>
                </div>
             </div>
             <hr style={{ width: "80%", margin: "20px auto",opacity:"0.25" }} />

             <div className="intro-title">
                <h1>Excursiones al desierto desde Marrakech</h1>
                <div className="rating-section">
                <span className="rating-score">
                    <i className="fa-solid fa-check-circle"></i> 5.0
                </span>

                <span className="rating-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-alt"></i>
                </span>

                <span className="rating-text">
                    5.0 de 5 estrellas según 3715 reseñas
                </span>

                <span className="verified">
                    Verified <i className="fa-solid fa-circle-check"></i>
                </span>
           </div>

             </div>

          </>
        )
        
        }

export default Intro