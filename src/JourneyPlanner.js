import React, {useState, useRef} from 'react';
import { Map, TileLayer } from 'leaflet';
import { GoogleMap, useJsApiLoader, Marker, useLoadScript } from '@react-google-maps/api';
import osm from "./osm-providers";

export default function JourneyPlanner()  {
    const [center, setCenter] = useState({lat: 44, lng: -80});
    const mapRef = useRef();
    const zoom_level = 15;
    // const {isLoaded} = useJsApiLoader({
    //     googleMapsApiKey: "AIzaSyBLdK1aoSupXfhnSg5_Sj6J-i5DVeG2UpU",
    // });

    // if(!isLoaded) return <div className='flex align-center justify-center'>Loading...</div>

    return (
        <Map
        center={center}
        zoom={zoom_level}
        ref={mapRef}
        >
            <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}>

            </TileLayer>
        </Map>
    )
}


// function Map() {
//     return (
//         <Map
//         center={center}
//         zoom={zoom_level}
//         >
//             <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}>

//             </TileLayer>
//         </Map>
//     )
// }
