import React, { useState, useEffect } from "react"
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} from "react-google-maps";
import Geocode from "react-geocode"
import Autocomplete from 'react-google-autocomplete';

import env from "./../../config/env"
import { getInfoByLatLng } from "./mapHelperMethod";

import styles from "./Map.module.css"
import LocationIndicator from "../LocationIndicator/LocationIndicator";
import SaveButton from "../SaveButton/SaveButton";
import { MapStateProps } from "../../types/map";
import { useQuery } from "@apollo/client";
import { GET_MAP_STATE } from "../../query/Client/MapStateQuery";
import { mapStateVar } from "../../local/cache";

interface Position {
    lat: number
    lng: number
}

Geocode.setApiKey(env.GOOGLE_API_KEY)

const Map = () => {
    const { data : { mapState }} = useQuery<{ mapState : MapStateProps}>(GET_MAP_STATE)

    const onDragEnd = async (e: any) => {
        let lat = e.latLng.lat()
        let lng = e.latLng.lng()
        try{
            const geoInfo = await getInfoByLatLng(lat, lng) 
            mapStateVar(
                {
                        ...mapState,
                        address: geoInfo.results[0].formatted_address , 
                        mapPosition: {
                            lat, lng
                        },
                        markerPosition: {
                            lat, lng
                        }
                    }
            )
         
        }catch(err){
            if(err){
                console.log("geo error : " , err)
                // setMapState(mapState)
                mapStateVar(mapState)
            }
        }
    }

    const onPlaceSelected = async (place: any) => {
        const address = place.formatted_address
        const lat = place.geometry.location.lat()
        const lng = place.geometry.location.lng()

        mapStateVar({
                ...mapState,
                address,
                mapPosition:{
                    lat, lng
                },
                markerPosition:{
                    lat, lng
                }
            }
        )
    }
   
    const MapWithAMarker: React.ComponentClass<any, any> = withScriptjs(withGoogleMap(props =>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: mapState.mapPosition.lat, lng: mapState.mapPosition.lng }}
        >
            <Marker
                position={{ lat: mapState.markerPosition.lat, lng: mapState.markerPosition.lng }}
                draggable={true}
                onDragEnd={onDragEnd}
           >
              {!mapState.address ? null : <InfoWindow><>{mapState.address}</></InfoWindow>} 
               </Marker> 
               <form>
                    <Autocomplete
                        className={styles.autoComplete}
                            onPlaceSelected={onPlaceSelected}
                            types={['(regions)']}
                    />
                    <LocationIndicator address={mapState.address} />
                    <SaveButton mapState={mapState} />
                </form>
            </GoogleMap>
        ));

        return (
            <MapWithAMarker
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${env.GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }

    export default Map
