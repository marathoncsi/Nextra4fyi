
"use client";
import React, { useEffect, useState } from "react";

const Weather21234 = () => {
  const [temp, setTemp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Using Open-Meteo free API (no key required)
    // 21234 (Parkville, MD) lat/lon: 39.3853, -76.5416
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=39.3853&longitude=-76.5416&current_weather=true&temperature_unit=fahrenheit"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.current_weather && data.current_weather.temperature) {
          setTemp(data.current_weather.temperature);
        } else {
          setError("No temperature data");
        }
        setLoading(false);
      })
      .catch((_err) => {
        setError("Failed to fetch weather");
        setLoading(false);
      });
  }, []);

  if (loading) return <span>Loading temperature...</span>;
  if (error) return <span>Error: {error}</span>;
  return (
    <span>Current temperature in 21234: <b>{temp}°F</b></span>
  );
};

export default Weather21234;
