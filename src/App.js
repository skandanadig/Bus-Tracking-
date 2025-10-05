// src/App.js
import React from "react";
import Map from "./components/Map";
import './App.css'; // Make sure to import a CSS file

function App() {
  return (
    <div className="App"> {/* Add a className */}
      <h1>Bus Tracker</h1>
      <div className="map-container"> {/* Add a wrapper with a className */}
        <Map />
      </div>
    </div>
  );
}

export default App;