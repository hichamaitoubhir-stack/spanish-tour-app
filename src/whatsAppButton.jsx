import "./styles/whatsapp.css"
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

 function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2126125022" // replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton
