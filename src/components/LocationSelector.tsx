import { useState } from "react";
import { locations } from "../constant";

const LocationSelector = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (id: number) => {
    setSelectedLocation(id);
  };

  return (
    <div className="w-full  mx-auto p-4 bg-white shadow-md rounded-lg flex flex-col">
      {/* Search Input */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search Location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Locations List */}
      <ul className="space-y-2 overflow-y-auto flex-grow max-h-[calc(100vh-180px)] border border-gray-300 rounded-md p-2">
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location) => (
            <li
              key={location.id}
              className="flex items-center justify-between p-2 rounded hover:bg-gray-100"
            >
              <span className="text-gray-700">{location.name}</span>
              <input
                type="checkbox"
                checked={selectedLocation === location.id}
                onChange={() => handleSelect(location.id)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-center">No locations found</li>
        )}
      </ul>

      {/* Selected Location */}
      {selectedLocation !== null && (
        <div className="mt-4 text-green-600">
          Selected Location:{" "}
          {locations.find((loc) => loc.id === selectedLocation)?.name}
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
