import mapboxgl from 'mapbox-gl';

import React, {useEffect, useState, useRef} from 'react'

mapboxgl.accessToken = "pk.eyJ1IjoibWFya2thYmllcnNraSIsImEiOiJja2lpa3N2c3QwaXVrMnltbHVzcXZ3dDU2In0.t_Lcd-0hPAJSk75HCJFw0g";

const MapBlock = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(51.073);
    const [lat, setLat] = useState(45);
    const [zoom, setZoom] = useState(5.91); 

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });
    });

    return(
        <div ref={mapContainer} style={{height: '600px'}} className="map-container map" />
    )

}

export default MapBlock