import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";
import { useState, useEffect } from 'react';
import styles from '../../styles/MapcontentDisp.module.css';
import useFirebase from '../../lib/useFirebase';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Map = () => {
  const [lati, setLati] = useState([]);
  const [long, setLong] = useState([]);
  const [mapping, setMapping] = useState({});
  const [loading, setLoading] = useState(true);
  const {getNFTs, filterNFTs} = useFirebase();
  const [data, setData] = useState([])
  const [itemId, setItemId] = useState([]);
  const router = useRouter();
  

  useEffect(()=>{
    console.log("data updated is:", data);
    const displayData = async () => {
      // data here is basically from the database
      for (const item of data) {
        if (item.assetType === "Premium") {
          await new Promise((resolve) => setTimeout(resolve, 300)); // Add 0.3-second delay
          const res = await fetch(`https://geocode.maps.co/search?q=${item.name}+${item.city}+${item.state}+${item.pincode}+${item.country}`);
          const geoData = await res.json();

          if (geoData.length === 0) {
            const res2 = await fetch(`https://geocode.maps.co/search?q=${item.city}+${item.state}+${item.pincode}+${item.country}`);
            const responseData = await res2.json();
            if (responseData && responseData.length > 0) {
              const { lat, lon } = responseData[0];
              updateMapping(lat, lon, item.name, item.assetType, item.image, item.id);
            }
          } else {
            if (geoData && geoData.length > 0) {
              const { lat, lon } = geoData[0];
              updateMapping(lat, lon, item.name, item.assetType, item.image, item.id);
            }
          }
        } else if (item.assetType !== "Premium") {
          const res = await fetch(`https://geocode.maps.co/search?q=${item.city}+${item.state}+${item.pincode}+${item.country}`);
          const responseData = await res.json();
          if (responseData && responseData.length > 0) {
            const { lat, lon } = responseData[0];
            updateMapping(lat, lon, item.name, item.assetType, item.image, item.id);
          }
        }
      }
    }
    displayData();
  },[data])
  
  useEffect(() => {
    let isMounted = true; // Flag to check if the component is still mounted
    const fetchData = async () => {
      const allnfts = await getNFTs();
      setData(allnfts)
      if (isMounted) {
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      isMounted = false; // Set the flag to false when the component is unmounted
    };
  }, []);
  const handleCardClick = (_id) => {
    router.push(`/product/${_id}`);
  };

  const updateMapping = (lat, lon, name, assetType, image, id) => {
    const key = `${lat},${lon}`;
    setItemId((prevItemId) => [...prevItemId, id]);
    setLati((prevLati) => [...prevLati, lat]);
    setLong((prevLong) => [...prevLong, lon]);
    setMapping((prevMapping) => {
      const existingObjects = prevMapping[key] || [];
      const objectExists = existingObjects.some((obj) => obj.name === name);
      if (!objectExists) {
        return {
          ...prevMapping,
          [key]: [...existingObjects, { name, assetType, image, id }],
        };
      }
      return prevMapping;
    });
  };

  useEffect(() => {
    console.log("Mapping:", mapping); // Log the mapping object whenever it changes
  }, [mapping]);

  if (loading) {
    <div className={styles.loading}>
              <div className={styles.loader} />
              <h3 style={{marginLeft: '30px'}}>Loading</h3>
    </div>
  }

  return (
    <div className={styles.mapmaincontainer}> 
      <MapContainer className={styles.mapcontain} center={[23.054805, 72.5964358]} zoom={10} scrollWheelZoom={true}>
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
  {mapping[`${lat},${long[i]}`] && mapping[`${lat},${long[i]}`].map((obj, j) => {
    console.log("obj is:", obj);
    return (
      <div className={styles.card} onClick={() => handleCardClick(obj.id)}>
        <img src={obj.image} alt={obj.name} height="100px" width="100px" style={{borderRadius: '20px', border: '3px solid black'}}/>
        <div className={styles.content}>
          <div style={{fontSize: '20px', fontWeight: '500'}}>{obj.name}</div>
          <div style={{fontSize: '15px', fontWeight: '350', marginTop: '20px'}}>{obj.assetType}</div>
        </div>
      </div>
    );
  })}
</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
