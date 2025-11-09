import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"

function Footer() {
    return (
        <>
            <footer className="footer-container">
                <div className="footer-content">
                    <p className="footer-text">Síguenos en nuestras redes sociales</p>

                    <div className="social-links">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            title="Instagram"
                        >
                            <FiInstagram />
                        </a>

                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            title="WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>

                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                            <FiGithub />
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            title="LinkedIn"
                        >
                            <FiLinkedin />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 Todos los derechos reservados</p>
                </div>
            </footer>
        </>
    )
}

export default Footer