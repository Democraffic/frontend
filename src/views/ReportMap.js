import React, { useState, useEffect, useRef} from 'react'

import { TiWarningOutline } from 'react-icons/ti'
import { GoogleMap, useJsApiLoader, Marker, Circle } from '@react-google-maps/api';

import MapPopUp from 'MapPopUp';
import { useAppContext } from 'AppContext';

import ReportPopup from 'ReportPopup';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const colorMap = {
  proposed: 'red',
  considered: 'yellow',
  implementing: 'blue',
  implemented: 'green'
}

const ReportMap = () => {

  const [popupMounted, setPopupMouted] = useState(false)
  const { isLoaded: mapLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC60EX4zG8_9ZqhdLS27u-MusQ_MrrE82Q"
  });

  const [loading, setLoading] = useState(true)
  const mapRef = useRef(null);
  const [ center, setCenter] = useState({ lat: 0, lng: 0})
  const { position, setPosition, reports, selectedReport, setSelectedReport } = useAppContext()


  useEffect(() => {
    const watchPositionId = navigator.geolocation.watchPosition(
      position => {
        setPosition(position.coords);

        const lat = position.coords.latitude
        const lng = position.coords.longitude
        setCenter({ lat, lng });
        setLoading(false)
      },
      error => {
        console.error(error);
      }
    );
    return () => navigator.geolocation.clearWatch(watchPositionId);
  }, []);


  const handleCenter = () => {
    if (!mapRef.current) return;
    const newPos = mapRef.current.getCenter().toJSON();
    console.log(newPos)
    setCenter(newPos);
  }


  if (loading || !mapLoaded) {
    return (
      <div className="relative w-full h-full">
        <div className="flex h-full justify-center items-center space-x-2 animate-pulse">
          <div className="w-8 h-8 bg-indigo-400 rounded-full"></div>
          <div className="w-8 h-8 bg-indigo-600 rounded-full"></div>
          <div className="w-8 h-8 bg-indigo-400 rounded-full"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full">
      {popupMounted && <div className="absolute top-0 left-0 h-full w-full items-center flex py-12 z-30 justify-items rounded-sm shadow-sm bg-gray-800 opacity-70"></div>}
      {popupMounted && <MapPopUp onClose={() => setPopupMouted(false)} />}


      {selectedReport && <div className="absolute top-0 left-0 h-full w-full items-center flex py-12 z-30 justify-items rounded-sm shadow-sm bg-gray-800 opacity-70"></div>}
      {selectedReport && <ReportPopup />}


      {mapLoaded && !loading && (
        <div className="h-full w-full">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
            onLoad={(map) => mapRef.current = map}
            onDragEnd={handleCenter}
            options={{ fullscreenControl: true, disableDefaultUI: true }}
          >
            <Marker icon="https://www.robotwoods.com/dev/misc/bluecircle.png" position={{ lat: position?.latitude, lng: position?.longitude }} />

            {reports.map(report => (
              <Marker
                icon={`https://maps.google.com/mapfiles/ms/icons/${colorMap[report.status]}-dot.png`}
                key={report._id}
                position={{ lat: report.coordinates[0].latitude, lng: report.coordinates[0].longitude }}
                onClick={() => setSelectedReport(report)}
              />
            ))
            }

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
                radius: position.accuracy,
                zIndex: 1
              }}
            />
          </GoogleMap>
        </div>
      )}

      <div className="absolute right-0 bottom-0 rounded-full bg-red-400 hover:bg-red-600 text-4xl shadow-md p-3 mr-5 mb-5 z-10" onClick={() => setPopupMouted(true)}>
        <TiWarningOutline />
      </div>

    </div >
  )
}

export default ReportMap
