import React, { useState } from "react";
import planetData from "../utils/planetData";
import { ChevronDown, ChevronUp } from "lucide-react";

const PlanetInfo = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(planetData[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handlePlanetSelect = (planet) => {
    setSelectedPlanet(planet);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg text-white z-50 text-sm font-bold flex flex-col gap-[12px]">
      <p>Informasi tentang planet</p>
      <button
        onClick={toggleDropdown}
        className="cursor-pointer w-full flex justify-start items-center gap-[8px]"
      >
        <p>{selectedPlanet ? selectedPlanet.name : "Pilih Planet"}</p>
        {isDropdownOpen ? (
          <ChevronUp size={24} className="pt-1" />
        ) : (
          <ChevronDown size={24} className="pt-1" />
        )}
      </button>

      {isDropdownOpen && (
        <div>
          {planetData.map((planet) => (
            <div
              key={planet.name}
              className="cursor-pointer p-2 hover:bg-white/20 rounded-md"
              onClick={() => handlePlanetSelect(planet)}
            >
              {planet.name}
            </div>
          ))}
        </div>
      )}

      {selectedPlanet && !isDropdownOpen && (
        <>
          <ul className="list-disc pl-5">
            <li>
              <div className="flex flex-col">
                <span>Ukuran: </span>
                <span className="font-light">{selectedPlanet.info.size}</span>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <span>Jarak ke Matahari:</span>
                <span className="font-light">
                  {selectedPlanet.info.distanceFromSun}
                </span>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <span>Kecepatan:</span>
                <span className="font-light">
                  Rotasi: {selectedPlanet.info.rotationSpeed.daily}
                </span>
                <span className="font-light">
                  Revolusi: {selectedPlanet.info.rotationSpeed.yearly}
                </span>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <span>Orbit:</span>
                <span className="font-light">
                  Semi-Major Axis: {selectedPlanet.semiMajorAxisInfo}
                </span>
                <span className="font-light">
                  Eccentricity: {selectedPlanet.eccentricity}
                </span>
                <span className="font-light">
                  Inclination: {selectedPlanet.inclination}
                </span>
              </div>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default PlanetInfo;
