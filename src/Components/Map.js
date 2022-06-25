import map from "../img/map-agencies.jpg";
import { Menu, Transition } from '@headlessui/react'
import MapAgencies from './MapAgencies'
import MapAirports from './MapAirports'

const Map = () => {
  return (
    <section className="flex pt-20 pb-20 mx-auto max-w-[1200px] bg-[#e7fae2] text-green-900">
      <div className="w-3/5 pl-6 rounded-4">
        <img className="rounded-2xl" src={map}></img>
      </div>

      <div className="w-2/5 mx-auto px-4">
        <div className="pb-4">
          <h2 className="text-center text-4xl font-bold pb-1">Our agencies</h2>
          <p className="text-center font-medium">We're all over UK</p>
        </div>
        <div className="flex flex-col bg-green-400 rounded-lg p-4 m-4 mb-8">
          <span className="text-xl font-semibold text-[#fafdf9] mb-4">Agency</span>
          <div>
          <MapAgencies />
          </div>
        </div>
        <div className="flex flex-col bg-green-600 rounded-lg p-4 m-4 mb-8">
          <span className="text-xl font-semibold text-[#fafdf9] mb-4">Airport</span>
          <div>
          <MapAirports />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
