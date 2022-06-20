import logo from "./logo.svg";
import "./styles/App.css";
import logoImg from "./img/logo.svg";
import heroImg from "./img/hero-section-background.jpg";
import featuresTick from "./img/icons/features-tick.svg";
import iconCalendar from "./img/icons/faq-icons/icon-calendar.svg";
import iconCar from "./img/icons/faq-icons/icon-car.svg";
import iconDriversLicense from "./img/icons/faq-icons/icon-drivers-license.svg";
import iconPayment from "./img/icons/faq-icons/icon-payment.svg";
import iconCarDriving from "./img/icons/faq-icons/icon-car-driving.svg";

function App() {
  return (
    <>
      <div className="hero-container max-w-[100%] h-[500px] ">
        <div className="ml-auto mr-auto max-w-[1000px]">
          <nav id="navbar" className="flex pt-8 pb-8">
            <div className="logo w-2/6 flex">
              <img src={logoImg}></img>
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

      <div className="main-container">
        <section id="section-booking" className="pt-20 pb-20 bg-[#6CA95E]">
          <div className="max-w-[1000px] ml-auto mr-auto">
            <div className="booking__features flex flex-row justify-center gap-4">
              <div className="booking__feature flex flex-row text-l font-medium">
                <img
                  className="booking__feature__icon h-6"
                  src={featuresTick}
                ></img>
                <p>Free cancellation</p>
              </div>
              <div className="booking__feature flex flex-row text-l font-medium">
                <img
                  className="booking__feature__icon h-6"
                  src={featuresTick}
                ></img>
                <p>Available 24/7</p>
              </div>
              <div className="booking__feature flex flex-row text-l font-medium">
                <img
                  className="booking__feature__icon h-6"
                  src={featuresTick}
                ></img>
                <p>1400+ new cars</p>
              </div>
            </div>
            <div className="booking__inputs flex flex-row justify-center gap-4">
              <div className="booking__input booking__select-city">
                select city
              </div>
              <div className="booking__input booking__select-start-date">
                start date
              </div>
              <div className="booking__input booking__select-return-date">
                return date
              </div>
              <div className="booking__input booking__search-btn">search</div>
            </div>
            <div className="booking__options">
              <div className="flex flex-row gap-8">
                <input
                  id="booking__options-alt-return"
                  type="radio"
                  value="booking-alt-return"
                  name="gender"
                  className="text-xl"
                />
                <label
                  for="default-radio-1"
                  class="ml-2 text-sm font-light text-[#FCFFFC] dark:text-gray-300"
                >
                  Return car in a different location
                </label>
                <input
                  id="booking__options-alt-return"
                  type="radio"
                  value="booking-alt-return"
                  name="gender"
                  className="text-xl"
                />
                <label
                  for="default-radio-1"
                  class="ml-2 text-sm font-light text-[#FCFFFC] dark:text-gray-300"
                >
                  I’m under 21 years old
                </label>
              </div>
            </div>
          </div>
        </section>

        <section
          id="section__how-to"
          className="max-w-[1000px] ml-auto mr-auto pt-20 pb-20"
        >
          <div className="pb-20">
            <h2 className="text-center text-4xl font-bold pb-1">
              How does it work?
            </h2>
            <p className="text-center font-thin">Booking your car online</p>
          </div>

          <div id="faq__cards" className="px-20">
            <div className="faq__card">
              <img
                className="faq__icon"
                src={iconCalendar}
                alt="calendar icon"
              ></img>
              <div className="faq__card__description">
                <h3>1</h3>
                <p>Set the locations and dates</p>
              </div>
            </div>
            <div className="faq__card">
              <img className="faq__icon" src={iconCar} alt="car icon"></img>
              <div className="faq__card__description">
                <h3>2</h3>
                <p>Pick your car</p>
              </div>
            </div>
            <div className="faq__card">
              <img
                className="faq__icon"
                src={iconDriversLicense}
                alt="driver's license icon"
              ></img>
              <div className="faq__card__description">
                <h3>3</h3>
                <p>Fill in your details</p>
              </div>
            </div>
            <div class="faq__card">
              <img
                className="faq__icon"
                src={iconPayment}
                alt="payment card icon"
              ></img>
              <div className="faq__card__description">
                <h3>4</h3>
                <p>Pay online</p>
              </div>
            </div>
            <div class="faq__card">
              <img
                className="faq__icon"
                src={iconCarDriving}
                alt="driving icon"
              ></img>
              <div className="faq__card__description">
                <h3>5</h3>
                <p>Drive & explore!</p>
              </div>
            </div>
          </div>
        </section>

        <section id="section__benefits" className="py-20 bg-[#6CA95E]">
          <div className="max-w-[1000px] mx-auto">
            <div id="section__benefits__content" className="p-10 w-96">
              <h2 className="text-3xl font-semibold">Why choose us?</h2>
              <p className="font-thin text-xm">Great deals that just keep on giving:</p>
              <div className="py-4">
              <div className="booking__feature flex flex-row text-l font-medium pb-1">
                <img
                  className="booking__feature__icon h-6"
                  src={featuresTick}
                ></img>
                <p>Free cancellation</p>
              </div>
              <div className="booking__feature flex flex-row text-l font-medium pb-1">
                <img
                  className="booking__feature__icon h-6"
                  src={featuresTick}
                ></img>
                <p>Safety</p>
              </div>
              <div className="booking__feature flex flex-row text-l font-medium pb-1">
                <img
                  className="booking__feature__icon h-6"
                  src={featuresTick}
                ></img>
                <p>Best prices</p>
              </div>
              <div className="booking__feature flex flex-row text-l font-medium pb-1">
                <img
                  className="booking__feature__icon h-6"
                  src={featuresTick}
                ></img>
                <p>Delivery to your doorstep</p>
              </div>
              </div>
              <button>See offer</button>
            </div>
          </div>
        </section>
        <footer className="footer">footer</footer>
      </div>
    </>
  );
}

export default App;
