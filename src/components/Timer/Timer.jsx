"use client";
import React, { useState, useEffect } from "react";
import moment from "moment";

const Timer = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(moment()); 

    const interval = setInterval(() => {
      setTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return null; 

  return (
    <div className="w-full p-4 bg-gray-800 text-gray-200 rounded-2xl shadow-md flex flex-col">
      <p className="text-lg text-white">Timer</p>
      <div className="text-7xl font-normal tracking-wider mx-auto bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
        {time.format("HH:mm:ss")}
      </div>
    </div>
  );
};

export default Timer;
