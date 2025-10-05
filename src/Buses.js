import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; // Use `getDocs` to fetch a whole collection
import { db } from "./firebase";

const Buses = () => {
  const [routesData, setRoutesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllRoutes = async () => {
      try {
        // 1. Get all documents from the "buses" collection in a single query
        const routesCollection = collection(db, "buses");
        const routeSnapshot = await getDocs(routesCollection);

        // 2. Map over the results and format the data
        const allRoutesData = routeSnapshot.docs
          // Optional: Filter out the master "Buses" document if it still exists
          .filter(doc => doc.id !== "Buses") 
          .map(doc => ({
            id: doc.id,
            ...doc.data()
          }));

        setRoutesData(allRoutesData);
      } catch (err) {
        console.error("Error fetching routes:", err);
      } finally {
        // This will run whether the fetch succeeded or failed
        setLoading(false);
      }
    };

    fetchAllRoutes();
  }, []); // The empty array [] ensures this runs only once

  if (loading) {
    return <p>Loading bus routes...</p>;
  }

  return (
    <div>
      <h2>Bus Routes</h2>
      {routesData.map(route => (
        <div key={route.id} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <h3>Route: {route.id}</h3>
          {/* Using optional chaining (?.) to prevent errors if data is missing */}
          <p><strong>Stops:</strong> {route.stops?.join(", ")}</p>
          <p><strong>Timings:</strong> {route.timings?.join(", ")}</p>
          <p><strong>Number of Geolocations:</strong> {route.geolocations?.length || 0}</p>
        </div>
      ))}
    </div>
  );
};

export default Buses;