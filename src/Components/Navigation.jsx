function Navigation() {
    return (
        <nav style={{backgroundColor: "#4E4E4E"}}>
            <div className="container nav-container">
                <a className="firm">Psi raj</a>
                <ul className="nav-list">
                    <li> <a href="#us" className="spn">o nas</a></li>
                    <li><a href="#offer" className="spn">oferta</a></li>
                    <li><a href="" className="spn disabled">kontakt</a></li>
                </ul>
            </div>   
        </nav>
    )
}
export default Navigation;

