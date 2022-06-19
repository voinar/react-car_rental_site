import logo from "./logo.svg";
import "./styles/App.css";
import logoImg from "./img/logo.svg";
import heroImg from "./img/hero-section-background.jpg";

function App() {
  return (
    <>
    <div className="container max-w-[100%] min-h-[600px]">
      <div className="header ml-auto mr-auto max-w-[1000px]">
        <nav className="navbar flex pt-8 pb-8">
          <div className="logo w-2/6 flex">
            <img src={logoImg}></img>
            <span className="text-4xl pl-2">RENTACAR</span>
          </div>
          <ul className="flex w-4/6 justify-end text-2xl gap-x-2 font-bold content-center">
            <li>offer</li>
            <li>booking</li>
            <li>faq</li>
            <li>contact us</li>
          </ul>
        </nav>
        <header>
          <div className="text-6xl font-bold max-w-[400px]">Find the best car rental deals</div>
          <div className="text-xl font-thin">Book online & get 10% off!</div>
        </header>
      </div>

    </div>
    <div className="section pl-[20%] pr-[20%] max-w-[1000px]">section</div>
    <div className="footer">footer</div>
    </>
  );
}

export default App;
