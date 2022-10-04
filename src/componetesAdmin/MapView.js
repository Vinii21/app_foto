import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import Markers from "./Markers";

const MapView = () => {

    const position = [51.505, -0.09]
    const sarchi = [10.0907857,-84.3452533]
    return (
        <>
        <MapContainer center={position} zoom={15} id='map'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Markers />
        </MapContainer>
        </>
    );
}
 
export default MapView;