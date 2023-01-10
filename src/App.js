import "./Reset.css";
import "./App.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import SectionEmployees from "./Components/SectionEmployees";
import SectionServices from "./Components/SectionServices";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <SectionEmployees />
      <SectionServices />
      <Footer />
    </div>
  );
}

export default App;
