import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";
import { useState, useEffect } from 'react';
import data from '../../data/Data.json';
import styles from '../../styles/MapcontentDisp.module.css';

const Map = () => {
  const [lati, setLati] = useState([]);
  const [long, setLong] = useState([]);
  const [mapping, setMapping] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // Flag to check if the component is still mounted

    const fetchData = async () => {
      // data here is basically from the database
      for (const item of data) {
        if (item.type === "Premium") {
          await new Promise((resolve) => setTimeout(resolve, 300)); // Add 0.3-second delay
          const res = await fetch(`https://geocode.maps.co/search?q=${item.name}+${item.City}+${item.State}+${item.Pincode}+${item.Country}`);
          const geoData = await res.json();

          if (geoData.length === 0) {
            const res2 = await fetch(`https://geocode.maps.co/search?q=${item.City}+${item.State}+${item.Pincode}+${item.Country}`);
            const responseData = await res2.json();
            if (responseData && responseData.length > 0) {
              const { lat, lon } = responseData[0];
              updateMapping(lat, lon, item.name, item.type, item.image);
            }
          } else {
            if (geoData && geoData.length > 0) {
              const { lat, lon } = geoData[0];
              updateMapping(lat, lon, item.name, item.type, item.image);
            }
          }
        } else if (item.type !== "Premium") {
          const res = await fetch(`https://geocode.maps.co/search?q=${item.City}+${item.State}+${item.Pincode}+${item.Country}`);
          const responseData = await res.json();
          if (responseData && responseData.length > 0) {
            const { lat, lon } = responseData[0];
            updateMapping(lat, lon, item.name, item.type, item.image);
          }
        }
      }
      if (isMounted) {
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      isMounted = false; // Set the flag to false when the component is unmounted
    };
  }, [data]);

  const updateMapping = (lat, lon, name, type, image) => {
    const key = `${lat},${lon}`;
    setLati((prevLati) => [...prevLati, lat]);
    setLong((prevLong) => [...prevLong, lon]);
    setMapping((prevMapping) => {
      const existingObjects = prevMapping[key] || [];
      const objectExists = existingObjects.some((obj) => obj.name === name);
      if (!objectExists) {
        return {
          ...prevMapping,
          [key]: [...existingObjects, { name, type, image }],
        };
      }
      return prevMapping;
    });
  };

  useEffect(() => {
    console.log("Mapping:", mapping); // Log the mapping object whenever it changes
  }, [mapping]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ marginBottom: '200px', marginLeft: '40px' }}>
      <MapContainer className={styles.mapcontain} style={{ height: "65vh", width: "80vw", borderRadius: '20px' }} center={[40.8054, 4.0241]} zoom={4} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {lati.map((lat, i) => (
          <Marker
            key={i}
            position={[lat, long[i]]}
            draggable={false}
            animate={true}
          >
            <Popup>
              {mapping[`${lat},${long[i]}`] && mapping[`${lat},${long[i]}`].map((obj, j) => (
                <div key={j} className={styles.card}>
                  <img src={obj.image} alt={obj.name} height="100px" width="100px" style={{borderRadius: '20px', border: '3px solid black'}}/>
                  <div className={styles.content}>
                  <div style={{fontSize: '20px', fontWeight: '500'}}>{obj.name}</div>
                  <div style={{fontSize: '15px', fontWeight: '350', marginTop: '20px'}}>{obj.type}</div>
                  </div>
                  
                  
                </div>
              ))}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
