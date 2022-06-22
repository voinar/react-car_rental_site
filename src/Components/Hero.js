import logoImg from "../img/logo.svg";


const Hero = () => {    
  return (
    <div className="hero-container max-w-[100%] h-[500px]">
    <div className="mx-auto max-w-[1000px]">
      <nav id="navbar" className="flex pt-8 pb-8">
        <div className="logo w-2/6 flex">
          <img src={logoImg} alt="indragon logo"></img>
          <span className="text-4xl pl-2">RENTACAR</span>
        </div>
        <ul className="flex w-4/6 justify-end text-xl gap-x-10 font-bold">
          <li className="pt-2">offer</li>
          <li className="pt-2">booking</li>
          <li className="pt-2">faq</li>
          <li className="pt-2">contact us</li>
        </ul>
      </nav>
      <header
        id="hero"
        className="flex flex-column justify-center items-center max-w-[400px] h-[360px]"
      >
        <div>
          <div className="text-6xl font-extrabold">
            <h1>Find the best car rental deals</h1>
          </div>
          <div className="text-xl font-thin">
            <p className="pt-2">Book online & get 10% off!</p>
          </div>
        </div>
      </header>
    </div>
  </div>
  )
}

export default Hero