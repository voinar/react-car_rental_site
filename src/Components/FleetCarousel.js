import { useState, useRef, useEffect } from "react";
import data from "../data/fleet.json";

import arrowLeft from "../img/arrow-left.svg";
import arrowRight from "../img/arrow-right.svg";

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-12 mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-green-900/75 text-white w-6 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <img src={arrowLeft} alt="scroll left"></img>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-green-900/75 text-white w-6 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <img src={arrowRight} alt="scroll left"></img>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 ml-8 mr-8"
        >
          {data.resources.map((resource, index) => {
            return (
              <div   className="h-[300px]">
                <div
                  key={index}
                  className="carousel-item text-center relative w-60 h-60 snap-start"
                >
                  <a
                    href={resource.link}
                    className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                    style={{
                      backgroundImage: `url(${resource.imageUrl || ""})`,
                    }}
                  >
                    <img
                      src={resource.imageUrl || ""}
                      alt={resource.title}
                      className="w-auto aspect-square hidden"
                    />
                  </a>
                  <div>
                  <a
                    href={resource.link}
                    className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-green-800/50 z-10"
                  ></a>
                  </div>
                  <a href={resource.link} className="rounded-[10px] bg-[#f7fbf6] font-bold text-[#1D3218] outline outline-2 outline-[#1D3218] px-8 py-3 cursor-pointer">
                  {resource.type}</a>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
