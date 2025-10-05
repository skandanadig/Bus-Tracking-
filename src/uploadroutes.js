const { db } = require("./firebase");
const { doc, setDoc } = require("firebase/firestore");

const uploadAllRoutes = async () => {
  try {
    // 410-FA
    const routeRef410FA = doc(db, "buses", "410-FA");
    const data410FA = {
      name: "410-FA",
      stops: [
        "Banashankari", "Kadirenahalli Cross", "Devegowda Petrol Bunk", "Kamakhya",
        "Katriguppe", "Hosakerehalli", "PES College", "Veerabhadra nagara",
        "Nayandahalli", "Chandra Layout", "Nagarabhavi", "Malagala",
        "Summanahalli", "Pipeline", "Laggere Bridge", "Nandini Layout",
        "Rajkumar samadhi", "Gorguntepalya", "RMC Yard", "Yeshwanthpura Railway station",
        "Yeshwanthpura", "Yeshwanthpura TTMC"
      ],
      timings: ["7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM"],
      geolocations: [
        { name: "Banashankari", lat: 12.9337, lng: 77.5806 },
        { name: "Kadirenahalli Cross", lat: 12.9248, lng: 77.5679 },
        { name: "Devegowda Petrol Bunk", lat: 12.9187, lng: 77.5603 },
        { name: "Kamakhya", lat: 12.9233, lng: 77.5538 },
        { name: "Katriguppe", lat: 12.9261, lng: 77.5502 },
        { name: "Hosakerehalli", lat: 12.9325, lng: 77.5315 },
        { name: "PES College", lat: 12.9355, lng: 77.5340 },
        { name: "Veerabhadra nagara", lat: 12.9369, lng: 77.5269 },
        { name: "Nayandahalli", lat: 12.9494, lng: 77.5193 },
        { name: "Chandra Layout", lat: 12.9617, lng: 77.5202 },
        { name: "Nagarabhavi", lat: 12.9742, lng: 77.5087 },
        { name: "Malagala", lat: 12.9764, lng: 77.5028 },
        { name: "Summanahalli", lat: 12.9830, lng: 77.4971 },
        { name: "Pipeline", lat: 12.9873, lng: 77.4932 },
        { name: "Laggere Bridge", lat: 13.0058, lng: 77.5168 },
        { name: "Nandini Layout", lat: 13.0118, lng: 77.5289 },
        { name: "Rajkumar samadhi", lat: 13.0173, lng: 77.5428 },
        { name: "Gorguntepalya", lat: 13.0253, lng: 77.5452 },
        { name: "RMC Yard", lat: 13.0285, lng: 77.5528 },
        { name: "Yeshwanthpura Railway station", lat: 13.0289, lng: 77.5562 },
        { name: "Yeshwanthpura", lat: 13.0280, lng: 77.5596 },
        { name: "Yeshwanthpura TTMC", lat: 13.0275, lng: 77.5599 }
      ]
    };
    await setDoc(routeRef410FA, data410FA);
    console.log("✅ 410-FA uploaded successfully!");

    // MF-12
    const routeRefMF12 = doc(db, "buses", "MF-12");
    const dataMF12 = {
      name: "MF-12",
      stops: [
        "Banashankari", "Kadirenahalli Cross", "Devegowda Petrol Bunk", "Kamakhya",
        "Katriguppe", "Hosakere Halli", "PES College", "Veerabhadra nagara",
        "Mysore Road Metro", "BHEL", "Deepanjali Nagar", "Attiguppe",
        "Bunts Sangha", "Vijayanagara TTMC"
      ],
      timings: ["7:15 AM", "8:15 AM", "9:15 AM", "10:15 AM"],
      geolocations: [
        { name: "Banashankari", lat: 12.9337, lng: 77.5806 },
        { name: "Kadirenahalli Cross", lat: 12.9248, lng: 77.5679 },
        { name: "Devegowda Petrol Bunk", lat: 12.9187, lng: 77.5603 },
        { name: "Kamakhya", lat: 12.9233, lng: 77.5538 },
        { name: "Katriguppe", lat: 12.9261, lng: 77.5502 },
        { name: "Hosakere Halli", lat: 12.9325, lng: 77.5315 },
        { name: "PES College", lat: 12.9355, lng: 77.5340 },
        { name: "Veerabhadra nagara", lat: 12.9369, lng: 77.5269 },
        { name: "Mysore Road Metro", lat: 12.9490, lng: 77.5160 },
        { name: "BHEL", lat: 12.9550, lng: 77.5110 },
        { name: "Deepanjali Nagar", lat: 12.9600, lng: 77.5090 },
        { name: "Attiguppe", lat: 12.9670, lng: 77.5070 },
        { name: "Bunts Sangha", lat: 12.9705, lng: 77.5040 },
        { name: "Vijayanagara TTMC", lat: 12.9720, lng: 77.5015 }
      ]
    };
    await setDoc(routeRefMF12, dataMF12);
    console.log("✅ MF-12 uploaded successfully!");

    // 375-D
    const routeRef375D = doc(db, "buses", "375-D");
    const data375D = {
      name: "375-D",
      stops: [
        "Banashankari", "Kadirenahalli cross", "Devegowda Petrol Bunk", "Kamakhya",
        "Katriguppe", "Hoskere Halli Cross", "PES College", "Veerabhadra Nagara",
        "Nayandahalli", "Pantharapalya", "R R Nagara", "Bengaluru University",
        "Kenchanhalli", "RV college", "Dubasipalya", "Mylasandra", "Kengeri Bus Terminal"
      ],
      timings: ["7:30 AM", "8:30 AM", "9:30 AM", "10:30 AM"],
      geolocations: [
        { name: "Banashankari", lat: 12.9337, lng: 77.5806 },
        { name: "Kadirenahalli cross", lat: 12.9248, lng: 77.5679 },
        { name: "Devegowda Petrol Bunk", lat: 12.9187, lng: 77.5603 },
        { name: "Kamakhya", lat: 12.9233, lng: 77.5538 },
        { name: "Katriguppe", lat: 12.9261, lng: 77.5502 },
        { name: "Hoskere Halli Cross", lat: 12.9325, lng: 77.5315 },
        { name: "PES College", lat: 12.9355, lng: 77.5340 },
        { name: "Veerabhadra Nagara", lat: 12.9369, lng: 77.5269 },
        { name: "Nayandahalli", lat: 12.9494, lng: 77.5193 },
        { name: "Pantharapalya", lat: 12.9560, lng: 77.5080 },
        { name: "R R Nagara", lat: 12.9630, lng: 77.5050 },
        { name: "Bengaluru University", lat: 12.9700, lng: 77.5020 },
        { name: "Kenchanhalli", lat: 12.9750, lng: 77.5000 },
        { name: "RV college", lat: 12.9800, lng: 77.4980 },
        { name: "Dubasipalya", lat: 12.9850, lng: 77.4960 },
        { name: "Mylasandra", lat: 12.9900, lng: 77.4950 },
        { name: "Kengeri Bus Terminal", lat: 12.9950, lng: 77.4920 }
      ]
    };
    await setDoc(routeRef375D, data375D);
    console.log("✅ 375-D uploaded successfully!");

  } catch (err) {
    console.error("❌ Error uploading routes:", err);
  }
};

uploadAllRoutes();
