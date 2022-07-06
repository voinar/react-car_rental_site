import { useState } from "react";

import featuresTick from "../img/icons/features-tick.svg";
import database from "../data/data.json";
import BookingLocations from "./BookingLocations";
import BookingStart from "./BookingStart";
import BookingEnd from "./BookingEnd";

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    dateRange: "",
    bookingReturnAltLocation: false,
    bookingUnder21: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setBookingData((prevBookingData) => {
      return {
        ...prevBookingData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const [bookingStartSelection, setBookingStartSelection] = useState(false);
  const [bookingEndSelection, setBookingEndSelection] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(bookingData);
  };

  return (
    <section id="section-booking" className="pt-20 pb-20 bg-[#6CA95E]">
      <div className="max-w-[1000px] ml-auto mr-auto">
        <div className="booking__features flex flex-row justify-center gap-4 mb-4">
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
        <form
          className="booking__inputs flex flex-col justify-center gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row m-auto">
            <div className="booking__input booking__select-city">
              <BookingLocations />
            </div>
            <div className="booking__input booking__select-start-date flex flex-col">
              <button
                className="inline-flex w-full justify-center rounded-md bg-white bg-opacity-90 px-6 py-4 text-sm font-medium text-green-900 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                onClick={() => bookingStartSelection(setBookingStartSelection(!bookingStartSelection))}
              >
                {bookingStartSelection ? "Hide" : "Show"}
                Start Date
              </button>
              {bookingStartSelection && <BookingStart className="absolute" />}
            </div>
            <div className="booking__input booking__select-return-date">
              <button
                className="inline-flex w-full justify-center rounded-md bg-white bg-opacity-90 px-6 py-4 text-sm font-medium text-green-900 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                onClick={() => bookingEndSelection(setBookingEndSelection(!bookingEndSelection))}
              >
                {bookingEndSelection ? "Hide" : "Show"}
                End Date
              </button>
              {bookingEndSelection && <BookingEnd className="absolute" />}
            </div>
            <button className="booking__input booking__search-btn rounded-[10px] bg-[#EAF940] px-8 py-3 font-bold text-[#1D3218] outline outline-2 outline-[#1D3218]">
              SEARCH
            </button>
          </div>

          <div className="booking__options mt-8">
            <div className="flex flex-row justify-center">
              <input
                id="bookingReturnAltLocation"
                type="checkbox"
                value={bookingData.bookingReturnAltLocation}
                name="bookingReturnAltLocation"
                className="text-xl"
                onChange={handleChange}
              />
              <label
                htmlFor="bookingReturnAltLocation"
                className="ml-2 text-sm font-light text-[#FCFFFC] dark:text-gray-300"
              >
                Return car in a different location
              </label>
              <input
                id="bookingUnder21"
                type="checkbox"
                value={bookingData.bookingUnder21}
                name="bookingUnder21"
                className="text-xl ml-12"
                onChange={handleChange}
              />
              <label
                htmlFor="bookingUnder21"
                className="ml-2 text-sm font-light text-[#FCFFFC] dark:text-gray-300"
              >
                I’m under 21 years old
              </label>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;
