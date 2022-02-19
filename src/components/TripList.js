import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./TripList.css";

const TripList = () => {
  const [url, setUrl] = useState("http://localhost:3000/trips");

  const { data: trips, error } = useFetch(url);

  return (
    <div className="trip-list">
      {/* {isLoading && <div>Loading trips....</div>} */}
      {error && (
        <div>
          <h2>404 Error</h2>
          <h4>{error}</h4>
        </div>
      )}
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
