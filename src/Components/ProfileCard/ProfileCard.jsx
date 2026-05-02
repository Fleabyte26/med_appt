// src/Components/ProfileCard/ProfileCard.jsx
import React, { useState } from "react";

function ProfileCard() {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email] = useState("johndoe@example.com"); // Email is not editable
  const [phone, setPhone] = useState("123-456-7890");

  const handleSave = () => {
    setEditMode(false);
    // Optionally, send updated data to server here
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", width: "300px" }}>
      {editMode ? (
        <>
          <div>
            <label>Name: </label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Phone: </label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{name}</h3>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default ProfileCard;
