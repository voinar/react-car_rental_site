import Carousel from "./FleetCarousel"

const Fleet = () => {
    return (
        <section id="section__fleet" className="py-20 bg-[#F5FFF2]">
        <div className="max-w-[1000px] mx-auto text-[#1D3218]">
        <div className="pb-20">
          <h2 className="text-center text-4xl font-bold pb-1">
            Our fleet
          </h2>
          <p className="text-center font-thin">1400+ cars on offer</p>
          <Carousel />
        </div>
        </div>
      </section>
    )
}

export default Fleet