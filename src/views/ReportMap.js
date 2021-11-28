import React, { useState, useEffect } from 'react'

import { TiWarningOutline } from 'react-icons/ti'
import { GoogleMap, useJsApiLoader, Marker, Circle } from '@react-google-maps/api';

import MapPopUp from 'MapPopUp';
import { useAppContext } from 'AppContext';


const containerStyle = {
  width: '100%',
  height: '100%',
};

const ReportMap = () => {

  const [popupMounted, setPopupMouted] = useState(false)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC60EX4zG8_9ZqhdLS27u-MusQ_MrrE82Q"
  });

  const { position, setPosition } = useAppContext()

  useEffect(() => {
    const watchPositionId = navigator.geolocation.watchPosition(
      position => {
        setPosition(position.coords);
      },
      error => {
        console.error(error);
      }
    );
    return () => navigator.geolocation.clearWatch(watchPositionId);
  }, []);


  return (
    <div className="relative h-full">
      {popupMounted && <div className="absolute top-0 left-0 h-full w-full items-center flex py-12 z-30 justify-items rounded-sm shadow-sm bg-gray-800 opacity-70"></div>}
      {popupMounted && <MapPopUp />}


      {isLoaded && position?.latitude && position?.longitude ? (
        <div className="h-full w-full">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: position.latitude, lng: position.longitude }}
            zoom={16}
            options={{ fullscreenControl: true, disableDefaultUI: true }}
          >
            <Marker icon="https://www.robotwoods.com/dev/misc/bluecircle.png" position={{ lat: position.latitude, lng: position.longitude }} />
            <Circle
              center={{ lat: position.latitude, lng: position.longitude }}
              options={{
                strokeColor: '#0000FF',
                strokeOpacity: 0.8,
                strokeWeight: 1,
                fillColor: '#0000FF',
                fillOpacity: 0.2,
                clickable: false,
                draggable: false,
                editable: false,
                visible: true,
                radius: 100,
                zIndex: 1
              }}
            />
          </GoogleMap>
        </div>) : <></>
      }

<div className="absolute right-0 bottom-0 rounded-full bg-red-400 hover:bg-red-600 text-4xl shadow-md p-3 mr-5 mb-5 z-10" onClick={() => setPopupMouted(true)}>
  <TiWarningOutline />
</div>

    </div >
  )
}

export default ReportMap
