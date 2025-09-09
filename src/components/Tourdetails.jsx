import { FaClock, FaMapMarkerAlt, FaRoute, FaUserFriends, FaCar } from "react-icons/fa";
 import { FileText, CheckCircle, XCircle, Map, Scale , Info, ShieldAlert, ScrollText } from "lucide-react";
// import "./DestinationDetail.css"; 
import "./Tourdetails.css";
import lalo from "../assets/images/lila.webp"

function TourDetails({ tour }) {

  
  return (
    <div className="tour-info">

      {/* 🔹 Tour main info */}
      <span>
        <h3><FaClock className="icon" /> Duración</h3>
        <p>{tour.duration || "N/A"}</p>
      </span>

      <span>
        <h3><FaMapMarkerAlt className="icon" /> Salida</h3>
        <p>{tour.departure || "Marrakech"}</p>
      </span>

      <span>
        <h3><FaRoute className="icon" /> Destino</h3>
        <p>{tour.name || "Destino no disponible"}</p>
      </span>

      <span>
        <h3><FaUserFriends className="icon" /> Tipo </h3>
        <p>{tour.type || "General"}</p>
      </span>

      <span>
        <h3><FaCar className="icon" /> Recogida</h3>
        <p>{tour.pickup || "Incluido"}</p>
      </span>

      {/* 🔹 Tour description */}
      <div className="tour-description">
  <div className="tour-description-left">
    <h4 className="title-with-icon">
      <FileText size={18} /> Descripción
    </h4>
    <p>{tour.description || "No hay descripción disponible."}</p>

    <h4 className="title-with-icon">
      <CheckCircle size={18} /> Incluido
    </h4>
    <ul>
      {(tour.included || []).map((item, i) => <li key={i}>{item}</li>)}
    </ul>

    <h4 className="title-with-icon">
      <XCircle size={18} /> No incluido
    </h4>
    <ul>
      {(tour.notIncluded || []).map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  </div>

  <div className="tour-description-right">
    <h4 className="title-with-icon">
      <Map size={18} /> Itinerario del tour
    </h4>
    <ul>
      {(tour.itinerary || []).map((step, i) => <li key={i}>{step}</li>)}
    </ul>

    <h4 className="title-with-icon">
      <Info size={18} /> Info Adicional
    </h4>
    <ul>
      {(tour.additionalInfo || []).map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  </div>
</div>

{/* 🔹 Cancellation + Terms */}
<div className="cancellationPolicy">
  <div>
    <h5 className="title-with-icon">
      <ShieldAlert size={18} /> Política de cancelación
    </h5>
    <ul>
      {(tour.cancellationPolicy || []).map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  </div>

  <div>
    <h5 className="title-with-icon">
      <Scale  size={18} /> Términos
    </h5>
    <ul>
      {(tour.terms || []).map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  </div>
</div>

      {/* 🔹 Cancellation + Terms */}
 

      {/* 🔹 Comments */}
      <div className="deja-resena">
        <h3>Déjanos un Comentario</h3>

        <form>
          <input type="text" placeholder="Nombre" />
          <textarea placeholder="Comentario"></textarea>
        </form>
        <button>Submit</button>

      </div>

        <div className="comments">
        <div>
        <h4>
          <img src={lalo} alt="Lila" />
          Lila
        </h4>
        <p>
          magico lugar a visitar , recomendo los espanas a visitar Ourika valley, 
          aire fresco y solo 30 minutoos de Marraksh
        </p>
       </div>
        <div>
        <h4>
          <img src={lalo} alt="Lila" />
          Lila
        </h4>
        <p>
          magico lugar a visitar , recomendo los espanas a visitar Ourika valley, 
          aire fresco y solo 30 minutoos de Marraksh
        </p>
       </div>
        <div>
        <h4>
          <img src={lalo} alt="Lila" />
          Lila
        </h4>
        <p>
          magico lugar a visitar , recomendo los espanas a visitar Ourika valley, 
          aire fresco y solo 30 minutoos de Marraksh
        </p>
       </div>
      </div>
    </div>
  );
}

export default TourDetails;
