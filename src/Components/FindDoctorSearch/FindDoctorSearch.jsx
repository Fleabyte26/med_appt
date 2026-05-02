import React, { useState } from "react";
import "./FindDoctorSearch.css";

const specialties = [
  "Cardiologist",
  "Dermatologist",
  "Dentist",
  "Neurologist",
  "Pediatrician",
  "Orthopedic",
  "General Physician"
];

const FindDoctorSearch = () => {
  const [query, setQuery] = useState("");
  const [showList, setShowList] = useState(false);

  const handleSelect = (item) => {
    setQuery(item);
    setShowList(false);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search doctor specialty..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShowList(true)}
        onBlur={() => setTimeout(() => setShowList(false), 200)}
        className="search-input"
      />

      {showList && (
        <ul className="dropdown">
          {specialties
            .filter((item) =>
              item.toLowerCase().includes(query.toLowerCase())
            )
            .map((item, index) => (
              <li key={index} onClick={() => handleSelect(item)}>
                {item}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default FindDoctorSearch;