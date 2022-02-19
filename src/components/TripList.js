import React, { useState } from "react";

// Import our custom Hook
import { useFetch } from "../hooks/useFetch";

// Import CSS
import "./TripList.css";

const TripList = () => {
  // state for URL change
  const [url, setUrl] = useState("http://localhost:3000/trips");

  // custom hook
  const { data: trips, error } = useFetch(url);

  return (
    <div className="trip-list">
      {/* {isLoading && <div>Loading trips....</div>} */}
      {/* if there is an error display the 404 error message */}
      {error && (
        <div>
          <h2>404 Error</h2>
          <h4>{error}</h4>
        </div>
      )}
      {/*  if the trips array  is loaded, then display the trip list */}
      {trips && (
        <>
          <h2>Trip List</h2>
          <ul>
            {trips.map((trip) => (
              <li key={trip.id}>
                <h3>{trip.title}</h3>
                <p>{trip.price}</p>
              </li>
            ))}
          </ul>
          {/* Filter Buttons */}
          <div className="filters">
            <button onClick={() => setUrl("http://localhost:3000/trips")}>
              All Trips
            </button>
            <button
              onClick={() => setUrl("http://localhost:3000/trips?loc=india")}
            >
              Indian Trips
            </button>
            <button
              onClick={() => setUrl("http://localhost:3000/trips?loc=america")}
            >
              American Trips
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TripList;
