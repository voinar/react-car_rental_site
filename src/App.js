import "./styles/App.css";

import Hero from "./Components/Hero";
import Booking from "./Components/Booking";
import Benefits from "./Components/Benefits";
import Fleet from "./Components/Fleet";
import Map from "./Components/Map";
import News from "./Components/News";
import Form from "./Components/Form";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Hero />
      <div className="main-container w-[1200px] mx-auto">
        <Booking />
        <Benefits />
        <Fleet />
        <Map />
        <News />
        <Form />
        <Footer />
      </div>
    </>
  );
}

export default App;
