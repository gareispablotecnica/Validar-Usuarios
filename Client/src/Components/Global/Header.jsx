import { TfiCrown } from "react-icons/tfi";

function Header() {
    return (
        <>
           <header className="Encabezado">
                <div className="header-logo">
                    <div className="crown-icon">
                        <TfiCrown />
                    </div>
                    <span className="logo-text">GAREIS S.A</span>
                </div>

                <nav className="Menu">
                    <a href="#registrar">Registrar Usuario</a>
                    <a href="#nosotros">Nosotros</a>
                    <a href="#productos">Productos</a>
                </nav>
            </header>
        </>
    )
}

export default Header