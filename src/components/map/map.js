import { useState } from "react";
import GoogleMapReact from 'google-map-react';
import { Marker } from "../marker/marker";
import { InfoBox } from "../marker/info-box/info-box";

export const Map = ({ events, center, zoom }) => {

    const [locationInfo, setLocationInfo] = useState(null);

    const markers = events.map(event => {
        if(event['categories'][0]['id'] === 8) {
            return (
                <Marker
                    lat={ event['geometries'][0]['coordinates'][1] }
                    lng={ event['geometries'][0]['coordinates'][0] }
                    onClick={ () => setLocationInfo({ id: event.id, title: event.title }) }
                />
            )
        }
        return null;
    });

    return (
        <div className="map">
            <GoogleMapReact defaultCenter={ center } defaultZoom={ zoom } bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}>
                { markers }
            </GoogleMapReact>
            { locationInfo ? <InfoBox info={ locationInfo } /> : null }
        </div>
    );

};

Map.defaultProps = {
    center: { lat: 42.3265, lng: -122.8756  },
    zoom: 6
};

