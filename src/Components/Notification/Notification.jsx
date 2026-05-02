import React, { useEffect, useState } from "react";
import "./Notification.css";

const Notification = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [username, setUsername] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Load booking data
  const loadNotificationData = () => {
    const storedEmail = sessionStorage.getItem("email");
    const storedDoctor = JSON.parse(localStorage.getItem("doctorData"));

    if (storedDoctor) {
      const storedAppointment = JSON.parse(
        localStorage.getItem(storedDoctor.name)
      );

      if (storedAppointment) {
        setUsername(storedEmail || "");
        setDoctorName(storedDoctor.name);
        setDate(storedAppointment.date);
        setTime(storedAppointment.time);
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  // Initial load
  useEffect(() => {
    loadNotificationData();
  }, []);

  // Listen for changes (booking/cancel simulation)
  useEffect(() => {
    const interval = setInterval(() => {
      loadNotificationData();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Hide manually when no data exists
  if (!isVisible) return null;

  return (
    <div className="notification-container">
      <div className="notification-card">

        <h3>Appointment Notification</h3>

        <p><strong>User:</strong> {username}</p>
        <p><strong>Doctor:</strong> {doctorName}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>

      </div>
    </div>
  );
};

export default Notification;