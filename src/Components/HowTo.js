import iconCalendar from "../img/icons/faq-icons/icon-calendar.svg";
import iconCar from "../img/icons/faq-icons/icon-car.svg";
import iconDriversLicense from "../img/icons/faq-icons/icon-drivers-license.svg";
import iconPayment from "../img/icons/faq-icons/icon-payment.svg";
import iconCarDriving from "../img/icons/faq-icons/icon-car-driving.svg";

const HowTo = () => {
  return (
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
  )
}

export default HowTo