import featuresTick from "../img/icons/features-tick.svg";

const Booking = () => {
  return (
    
    <section id="section-booking" className="pt-20 pb-20 bg-[#6CA95E]">
    <div className="max-w-[1000px] ml-auto mr-auto">
      <div className="booking__features flex flex-row justify-center gap-4">
        <div className="booking__feature flex flex-row text-l font-medium">
          <img
            className="booking__feature__icon h-6 pr-1"
            src={featuresTick}
            alt="feature"
          ></img>
          <p className="">Free cancellation</p>
        </div>
        <div className="booking__feature flex flex-row text-l font-medium">
          <img
            className="booking__feature__icon h-6 pr-1"
            src={featuresTick}
            alt="feature"
          ></img>
          <p>Available 24/7</p>
        </div>
        <div className="booking__feature flex flex-row text-l font-medium">
          <img
            className="booking__feature__icon h-6 pr-1"
            src={featuresTick}
            alt="feature"
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
        <button className="booking__input booking__search-btn rounded-[10px] bg-[#EAF940] px-8 py-3 font-bold text-[#1D3218] outline outline-2 outline-[#1D3218]">
          SEARCH
        </button>
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
  )
}

export default Booking