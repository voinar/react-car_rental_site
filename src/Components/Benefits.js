import featuresTick from "../img/icons/features-tick.svg";

const Benefits = () => {
  return (
    <section id="section__benefits" className="py-20 bg-[#6CA95E]">
    <div className="max-w-[1000px] mx-auto">
      <div id="section__benefits__content" className="p-10 w-96">
        <h2 className="text-3xl font-semibold">Why choose us?</h2>
        <p className="font-thin text-xm">
          Great deals that just keep on giving:
        </p>
        <div className="py-4">
          <div className="booking__feature flex flex-row text-l font-medium pb-1">
            <img
              className="booking__feature__icon h-6 pr-1"
              src={featuresTick}
              alt="benefit"
            ></img>
            <p>Free cancellation</p>
          </div>
          <div className="booking__feature flex flex-row text-l font-medium pb-1">
            <img
              className="booking__feature__icon h-6 pr-1"
              src={featuresTick}
              alt="benefit"
            ></img>
            <p>Safety</p>
          </div>
          <div className="booking__feature flex flex-row text-l font-medium pb-1">
            <img
              className="booking__feature__icon h-6 pr-1"
              src={featuresTick}
              alt="benefit"
            ></img>
            <p>Best prices</p>
          </div>
          <div className="booking__feature flex flex-row text-l font-medium pb-1">
            <img
              className="booking__feature__icon h-6 pr-1"
              src={featuresTick}
              alt="benefit"
            ></img>
            <p>Delivery to your doorstep</p>
          </div>
        </div>
        <button className="rounded-[10px] bg-[#EAF940] px-8 py-3 textll font-bold text-black">
          SEE OFFER
        </button>
      </div>
    </div>
  </section>
  )
}

export default Benefits