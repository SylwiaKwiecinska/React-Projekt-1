import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer>
            <div className="container footer-container">
                <p className="end">Psi raj - wszelkie prawa zastrzeżone, 2022</p>

                <ul className="footer_list">
                           
                    <li><a href="https://www.instagram.com/"><FontAwesomeIcon icon={faFacebookF} color="white"/></a></li>
                    <li><a href="https://www.facebook.com/"><FontAwesomeIcon icon={faInstagram} color="white"/></a></li>
            
                </ul>
            </div>     
        </footer>
    );
}
export default Footer;
