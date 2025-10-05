import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase"; // Make sure the path to firebase.js is correct
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Define a custom icon for the buses
// Place your bus-icon.png in the `public` folder of your project
const busIcon = new L.Icon({
  iconUrl: '/bus-icon.png',
  iconSize: [40, 40],
  iconAnchor: [20, 20], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -20] // Point from which the popup should open relative to the iconAnchor
});

function Map() {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);

  // This is the starting center for the map. You can adjust this.
  const initialCenter = [12.9716, 77.5946]; // Bengaluru coordinates

  useEffect(() => {
    // Set up a real-time listener to Firestore
    const busesCollection = collection(db, "buses");

    // onSnapshot listens for real-time updates to the collection
    const unsubscribe = onSnapshot(busesCollection, (snapshot) => {
      const busesData = snapshot.docs
        .filter(doc => doc.id !== "Buses") // Ignore the master document
        .map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      
      setBuses(busesData);
      setLoading(false);
      console.log("Live bus data updated:", busesData);
    }, (error) => {
      console.error("Error fetching live bus data:", error);
      setLoading(false);
    });

    // Cleanup function: This will unsubscribe from the listener
    // when the component is unmounted, preventing memory leaks.
    return () => unsubscribe();
  }, []); // The empty array [] ensures this effect runs only once

  if (loading) {
    return <p>Loading map and bus data...</p>;
  }

  return (
    <MapContainer center={initialCenter} zoom={13} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Map over the live bus data and create a Marker for each bus */}
      {buses.map(bus => (
        // Ensure the bus has valid latitude and longitude before rendering
        (bus.latitude && bus.longitude) && (
          <Marker
            key={bus.id}
            position={[bus.latitude, bus.longitude]}
            icon={busIcon}
          >
            <Popup>
              <strong>Bus: {bus.name || bus.id}</strong><br />
              Current Location: {bus.latitude}, {bus.longitude}
            </Popup>
          </Marker>
        )
      ))}
    </MapContainer>
  );
}

export default Map;