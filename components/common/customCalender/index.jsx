/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from 'react';
import Calendar from 'react-calendar';

function CustomCalender() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="customCalender">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default CustomCalender;
