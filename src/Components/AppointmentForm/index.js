import React, { useState } from 'react';
import './index.css'; // For custom styling

const AppointmentForm = () => {
  const [selectedMode, setSelectedMode] = useState('Video');
  const [selectedDate, setSelectedDate] = useState('Mon, 10 Oct');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');

  const modes = [
    { label: 'In-Clinic', duration: '45 Mins' },
    { label: 'Video', duration: '45 Mins' },
    { label: 'Chat', duration: '10 Mins' },
  ];

  const dates = [
    { date: 'Mon, 10 Oct', slots: 10 },
    { date: 'Tue, 11 Oct', slots: 2 },
    { date: 'Wed, 12 Oct', slots: 5 },
  ];

  const times = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:15 AM', '10:45 AM', '11:00 AM', 
    '04:00 PM', '04:15 PM', '04:30 PM', '04:45 PM', '05:15 PM'
  ];

  return (
    <div className="appointment-form">
        <div className='fee-cont'>
            <h3>Appointment Fee</h3>
            <span>&#8377; 699.00</span>
        </div>
      <h2>Select your mode of session</h2>
      <div className="modes">
        {modes.map((mode, index) => (
          <button
            key={index}
            className={`mode-button ${selectedMode === mode.label ? 'active' : ''}`}
            onClick={() => setSelectedMode(mode.label)}
          >
            {mode.label}
            <span>{mode.duration}</span>
          </button>
        ))}
      </div>

      <h2>Pick a time slot</h2>
      <div className="dates">
        {dates.map((day, index) => (
          <button
            key={index}
            className={`date-button ${selectedDate === day.date ? 'active' : ''}`}
            onClick={() => setSelectedDate(day.date)}
          >
            {day.date}
            <span>{day.slots} slots</span>
          </button>
        ))}
      </div>

      <h3>Morning</h3>
      <div className="times">
        {times.slice(0, 5).map((time, index) => (
          <button
            key={index}
            className={`time-button ${selectedTime === time ? 'active' : ''}`}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </button>
        ))}
      </div>

      <h3>Evening</h3>
      <div className="times">
        {times.slice(5).map((time, index) => (
          <button
            key={index}
            className={`time-button ${selectedTime === time ? 'active' : ''}`}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </button>
        ))}
      </div>

      <button className="appointment-button">
        Make An Appointment
      </button>
    </div>
  );
};

export default AppointmentForm;
