import "./styles/App.css";

import Hero from "./Components/Hero"
import Booking from "./Components/Booking"
import Benefits from "./Components/Benefits"
import Fleet from "./Components/Fleet"
import Map from "./Components/Map"

function App() {
  return (
    <>
      <Hero />
      <div className="main-container">
        <Booking />
        <Benefits />
        <Fleet />
        <Map />
        <footer className="footer">footer</footer>
      </div>
    </>
  );
}

export default App;
