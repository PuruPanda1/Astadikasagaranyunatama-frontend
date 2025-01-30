import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MapView = ({ points }) => {
    const mapContainerRef = useRef();
    const mapRef = useRef();

    useEffect(() => {
        mapboxgl.accessToken = import.meta.env.VITE_REACT_APP_MAPBOX_ACCESS_TOKEN

        // Create a GeoJSON object from the points for creating the path way
        const pathway = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        coordinates: points.map(point => [point.lng, point.lat]),
                        type: 'LineString'
                    }
                }
            ]
        };

        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/satellite-v9',
            center: [points[0].lng, points[0].lat],
            zoom: 6
        });

        mapRef.current.on('load', () => {
            mapRef.current.addSource('pathway', {
                type: 'geojson',
                data: pathway
            });

            mapRef.current.addLayer({
                type: 'line',
                source: 'pathway',
                id: 'line-background',
                paint: {
                  'line-color': 'blue',
                  'line-width': 6,
                  'line-opacity': 0.4
                }
              });
        
              mapRef.current.addLayer({
                type: 'line',
                source: 'pathway',
                id: 'line-dashed',
                paint: {
                  'line-color': 'blue',
                  'line-width': 6,
                  'line-dasharray': [0, 4, 3]
                }
              });
        
              const dashArraySequence = [
                [0, 4, 3],
                [0.5, 4, 2.5],
                [1, 4, 2],
                [1.5, 4, 1.5],
                [2, 4, 1],
                [2.5, 4, 0.5],
                [3, 4, 0],
                [0, 0.5, 3, 3.5],
                [0, 1, 3, 3],
                [0, 1.5, 3, 2.5],
                [0, 2, 3, 2],
                [0, 2.5, 3, 1.5],
                [0, 3, 3, 1],
                [0, 3.5, 3, 0.5]
              ];
        
              let step = 0;
        
              function animateDashArray(timestamp) {
                const newStep = parseInt((timestamp / 50) % dashArraySequence.length);
        
                if (newStep !== step) {
                  mapRef.current.setPaintProperty(
                    'line-dashed',
                    'line-dasharray',
                    dashArraySequence[step]
                  );
                  step = newStep;
                }
        
                requestAnimationFrame(animateDashArray);
              }
        
              animateDashArray(0);
        });

        mapRef.current.addControl(new mapboxgl.NavigationControl());

        return () => {
            mapRef.current.remove();
        };
    }, []);

    return <div ref={mapContainerRef} style={{ height: '100vh', width: '100vw' }}></div>;
};

export default MapView;