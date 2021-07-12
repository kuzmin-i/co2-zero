import React, { useRef, useEffect, useState } from 'react';

import ButtonTypeA from './components/ButtonTypeA'
import ButtonTypeB from './components/ButtonTypeB'
import ButtonTypeC from './components/ButtonTypeC'
import ButtonTypeD from './components/ButtonTypeD'



import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFya2thYmllcnNraSIsImEiOiJja2lpa3N2c3QwaXVrMnltbHVzcXZ3dDU2In0.t_Lcd-0hPAJSk75HCJFw0g";

const Map = () => {
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

  return (
    <div>
      <div style={{display: 'inline-block'}}>
      <ButtonTypeA 
        chapters = { [
          {'name': 'All Emitters'},
              {'name': 'Point Sources', 'child': true},
              {'name': 'Onshore Oil & Gas Production', 'child': true},
              {'name': 'Onshore Oil & Gas Gathering & Boosting', 'child': true},
              {'name': 'Local Distribution Companies', 'child': true},
              {'name': 'Onshore Gas Transmission Pipelines', 'child': true},
              {'name': 'SF6 from Elect. Dist. Systems', 'child': true},
          {'name': 'Suppliers', 'list': [
                  {'name': 'Coal-based Liquid Fuel Suppliers', 'list': [
                    {'name': 'Producers', 'child': true},
                    {'name': 'Local Distribution Companies', 'child': true}
                  ]},
                  {'name': 'Petroleum Product Suppliers'},
                  {'name': 'Natural Gas and Natural Gas Liquids Suppliers'}
          ]},
          {'name': 'CO2 Capture, Supply and Underground Injection'},
          {'name': 'Geologic Sequestration of CO2 (RR)'}
        ]
        }
      />


      <ButtonTypeB
        chapters = { [
          {'name': 'All Emitters'},
              {'name': 'Point Sources', 'child': true},
              {'name': 'Onshore Oil & Gas Production', 'child': true},
              {'name': 'Onshore Oil & Gas Gathering & Boosting', 'child': true},
              {'name': 'Local Distribution Companies', 'child': true},
              {'name': 'Onshore Gas Transmission Pipelines', 'child': true},
              {'name': 'SF6 from Elect. Dist. Systems', 'child': true},
          {'name': 'Suppliers', 'list': [
                  {'name': 'Coal-based Liquid Fuel Suppliers', 'list': [
                    {'name': 'Producers', 'child': true},
                    {'name': 'Local Distribution Companies', 'child': true}
                  ]},
                  {'name': 'Petroleum Product Suppliers'},
                  {'name': 'Natural Gas and Natural Gas Liquids Suppliers'}
          ]},
          {'name': 'CO2 Capture, Supply and Underground Injection'},
          {'name': 'Geologic Sequestration of CO2 (RR)'}
        ]
        }
      />
      <ButtonTypeC/>

      <ButtonTypeD/>
      </div>
      <div ref={mapContainer} style={{height: '400px'}} className="map-container" />
    </div>
    );
}

export default Map