import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import BlockLoader from "./BlockLoader";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import axios from "axios";

const MapView = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const [isLoading, setLoading] = useState(true);
  const { state } = useLocation();
  const [points, setPoints] = useState([]);
  // get the path points from the Django API
  useEffect(() => {
    setLoading(true);
    const getMinPath = async () => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/get-points-x/",
          {
            points: state.points,
            weights: state.weights,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = response.data.path;

        setPoints(data);

        console.log("Received Points:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    getMinPath();
    setLoading(false);
  }, []);

  useEffect(() => {
    console.log(points.length === 0, isLoading);
    if (points.length === 0 || isLoading) return;

    mapboxgl.accessToken = import.meta.env.VITE_REACT_APP_MAPBOX_ACCESS_TOKEN;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [points[0].longitude, points[0].latitude],
      zoom: 12,
    });

    const startMarker = new mapboxgl.Marker({
      element: document.createElement('div'),
      anchor: 'center'
    })
      .setLngLat([
        points[0].longitude,
        points[0].latitude,
      ])
      .addTo(mapRef.current);

    // Add ship icon to the marker element
    startMarker.getElement().innerHTML = `
      <img src="src/assets/icons/ship.png" style="width: 60px; height: 60px;" alt="Ship"/>
    `;

    const endMarker = new mapboxgl.Marker()
      .setLngLat([
        points[points.length - 1].longitude,
        points[points.length - 1].latitude,
      ])
      .addTo(mapRef.current);

    // Creating the pathway geojson object
    const pathway = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            coordinates: points.map((point) => [
              point.longitude,
              point.latitude,
            ]),
            type: "LineString",
          },
        },
      ],
    };

    mapRef.current.on("load", () => {
      // add the marker for each point to show variables about a point

      mapRef.current.addSource("places", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: points.map((point) => ({
            type: "Feature",
            properties: {
              // Change the description with points info --> wind_speed, weather_description, visibility, sea_level, distance, tide_height
              description: `<p style="color: black;">Wind Speed: ${point.location_parameters.wind_speed} m/s</p>
            <p style="color: black;">Weather: ${point.location_parameters.weather_description}</p>
            <p style="color: black;">Visibility: ${point.location_parameters.visibility} m</p>
            <p style="color: black;">Sea Level: ${point.location_parameters.sea_level} hPa</p>
            <p style="color: black;">Distance: ${point.location_parameters.distance} km</p>`,
            },
            geometry: {
              type: "Point",
              coordinates: [point.longitude, point.latitude],
            },
          })),
        },
      });

      mapRef.current.addLayer({
        id: "places",
        type: "circle",
        source: "places",
        paint: {
          "circle-color": "#4264fb",
          "circle-radius": 6,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#4264fb",
        },
      });

      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });

      mapRef.current.on("mouseenter", "places", (e) => {
        mapRef.current.getCanvas().style.cursor = "pointer";

        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        while (Math.abs(e.lngLat.longitude - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.longitude > coordinates[0] ? 360 : -360;
        }

        popup.setLngLat(coordinates).setHTML(description).addTo(mapRef.current);
      });

      mapRef.current.on("mouseleave", "places", () => {
        mapRef.current.getCanvas().style.cursor = "";
        popup.remove();
      });

      // adding the pathway on the map
      mapRef.current.addSource("pathway", {
        type: "geojson",
        data: pathway,
      });

      mapRef.current.addLayer({
        type: "line",
        source: "pathway",
        id: "line-background",
        paint: {
          "line-color": "blue",
          "line-width": 6,
          "line-opacity": 0.4,
        },
      });

      mapRef.current.addLayer({
        type: "line",
        source: "pathway",
        id: "line-dashed",
        paint: {
          "line-color": "blue",
          "line-width": 6,
          "line-dasharray": [0, 4, 3],
        },
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
        [0, 3.5, 3, 0.5],
      ];

      let step = 0;

      const animateDashArray = (timestamp) => {
        const newStep = parseInt((timestamp / 50) % dashArraySequence.length);

        if (newStep !== step) {
          mapRef.current.setPaintProperty(
            "line-dashed",
            "line-dasharray",
            dashArraySequence[step]
          );
          step = newStep;
        }

        requestAnimationFrame(animateDashArray);
      };

      animateDashArray(0);
    });

    mapRef.current.addControl(new mapboxgl.NavigationControl());

    return () => {
      mapRef.current.remove();
    };
  }, [points, isLoading]);

  return (
    <div
      ref={mapContainerRef}
      style={{ height: "100vh", width: "100vw" }}
    ></div>
  );
};

export default MapView;
