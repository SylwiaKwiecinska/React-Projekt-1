function Navigation() {
  return (
    <nav style={{ backgroundColor: "#4E4E4E" }}>
      <div className="container nav-container">
        <p className="firm">Psi raj</p>
        <ul className="nav-list">
          <li>
            {" "}
            <a href="/#us" className="spn">
              o nas
            </a>
          </li>
          <li>
            <a href="/#offer" className="spn">
              oferta
            </a>
          </li>
          <li>
            <p className="spn disabled">kontakt</p>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navigation;
