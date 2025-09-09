// src/Contact.jsx
import { FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";

import "./styles/contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h3>Contáctanos</h3>
      <p>Es un honor responder algunas de tus preguntas.</p>

      {/* Contact methods */}
      <div className="contact-methods">
        <a href="mailto:info@explordesierto.com" className="contact-item">
          <FaEnvelope className="icon mail" />
          <span>info@Exlopra_desierto.com</span>
        </a>
        <a href="https://wa.me/212600000000" target="_blank" rel="noreferrer" className="contact-item">
          <FaWhatsapp className="icon whatsapp" />
          <span>+212 600 000 000</span>
        </a>
        <a href="https://wa.me/212600000000" target="_blank" rel="noreferrer" className="contact-item">
            <FaInstagram className="icon instagram" />
          <span>Exlopra_desierto</span>
        </a>
      </div>

      {/* Contact form */}
      <form className="contact-form">
        <input type="text" placeholder="Tu nombre" required />
        <input type="tel" placeholder="Tu número de teléfono (mejor whatsapp)" required />
        <textarea placeholder="Tu mensaje" required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
