import "./Reset.css";
import "./App.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import SectionEmployees from "./Components/SectionEmployees";
import SectionServices from "./Components/SectionServices";
import Footer from "./Components/Footer";
import GoogleFontLoader from "react-google-font-loader";

function App() {
  return (
    <div className="App">
      <>
        <GoogleFontLoader
          fonts={[
            {
              font: "Roboto",
              weights: [400, "400i"],
            },
            {
              font: "Roboto Mono",
              weights: [400, 700],
            },
          ]}
          subsets={["cyrillic-ext", "greek"]}
        />

        <p style={{ fontFamily: "Roboto Mono, monospaced" }}></p>
        <p style={{ fontFamily: "Roboto, sans-serif" }}></p>

        <Navigation />
        <Header />
        <SectionEmployees />
        <SectionServices />
        <Footer />
      </>
    </div>
  );
}

export default App;
