import React, { useState } from "react";
import FindDoctorSearch from "./FindDoctorSearch/FindDoctorSearch";
import DoctorCard from "./DoctorCard/DoctorCard";

const doctorsData = [
  {
    name: "Dr. John Smith",
    experience: 10,
    rating: 4.5,
    image: "https://via.placeholder.com/80",
    specialty: "Cardiologist"
  },
  {
    name: "Dr. Sarah Lee",
    experience: 8,
    rating: 4.2,
    image: "https://via.placeholder.com/80",
    specialty: "Dermatologist"
  },
  {
    name: "Dr. Alex Brown",
    experience: 12,
    rating: 4.8,
    image: "https://via.placeholder.com/80",
    specialty: "Dentist"
  }
];

const BookingConsultation = () => {
  const [search, setSearch] = useState("");

  const filteredDoctors = doctorsData.filter((doc) =>
    doc.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      {/* SEARCH BAR */}
      <FindDoctorSearch onSearch={setSearch} />

      {/* DOCTOR LIST */}
      <div>
        {filteredDoctors.map((doc, index) => (
          <DoctorCard
            key={index}
            name={doc.name}
            experience={doc.experience}
            rating={doc.rating}
            image={doc.image}
          />
        ))}
      </div>

    </div>
  );
};

export default BookingConsultation;