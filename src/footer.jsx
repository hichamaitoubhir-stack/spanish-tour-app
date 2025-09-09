import "./styles/footer.css"
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import tourLogo from './assets/images/tourLogo.png'


function Footer(){

    return(
        
       <>
       
       <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section about">
          
          <h3>Explora desierto</h3>
          <div className="footer-logo">
              <img src={tourLogo}alt="" />
             </div>
          <p>Descubra auténticos tours marroquíes, aventuras en el desierto 
            y experiencias culturales con expertos locales.
         </p>
         
             
        </div>

        <div className="footer-section links">
          <h4>Enlaces rápidos</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/tours">Tours</a></li>
            <li><a href="/contact">Asociación</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section policy">
          <h4>Policies</h4>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/cancellation">Política de cancelación</a></li>
            <li><a href="/privacy">Política de privacidad</a></li>
            <li><a href="/terms">Términos y condiciones</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4> Contáctanos</h4>
          <p>👉 contact@exploradesierto.com</p>
          <p>👉 +212 6 06 12 50 22</p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>
      </div>

     
    </footer>

        <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Explora desierto -- All rights reserved.</p>
      </div>
       
       </>
    )
}
export default Footer