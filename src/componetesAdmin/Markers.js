import React from "react";
import { Marker } from "react-leaflet";
import { iconLocation } from "./iconLocation";

const Markers = () => {
    const sarchi = [10.0907857,-84.3452533]
    const grecia = [10.0755368,-84.3222142]
    return (
        <Marker position={sarchi} icon={iconLocation}/>
    );
}
 
export default Markers;