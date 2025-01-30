import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MapView from './components/MapView'
import PointForm from './components/PointForm'

function App() {

  // todo get this points list using Django API
  const points = [
    { lat: 5.926, lng: 80.108, name: '1', info: 'Start point' },
    { lat: 5.934993, lng: 80.108, name: '2', info: 'Start point' },
    { lat: 5.943986, lng: 80.108, name: '3', info: 'Start point' },
    { lat: 5.952979, lng: 80.108, name: '4', info: 'Start point' },
    { lat: 5.961972, lng: 80.108, name: '5', info: 'Start point' },
    { lat: 5.970965, lng: 80.108, name: '6', info: 'Start point' },
    { lat: 5.979958, lng: 80.108, name: '7', info: 'Start point' },
    { lat: 5.988951, lng: 80.108, name: '8', info: 'Start point' },
    { lat: 5.997944, lng: 80.108, name: '9', info: 'Start point' },
    { lat: 6.006937, lng: 80.108, name: '10', info: 'Start point' },
    { lat: 6.01593, lng: 80.108, name: '11', info: 'Start point' },
    { lat: 6.024923, lng: 80.108, name: '12', info: 'Start point' },
    { lat: 6.033916, lng: 80.108, name: '13', info: 'Start point' },
    { lat: 6.042909, lng: 80.108, name: '14', info: 'Start point' },
    { lat: 6.051902, lng: 80.108, name: '15', info: 'Start point' },
    { lat: 6.060895, lng: 80.108, name: '16', info: 'Start point' },
    { lat: 6.069888, lng: 80.108, name: '17', info: 'Start point' },
    { lat: 6.078881, lng: 80.108, name: '18', info: 'Start point' },
    { lat: 6.087874, lng: 80.108, name: '19', info: 'Start point' },
    { lat: 6.096867, lng: 80.108, name: '20', info: 'End point' }
  ];

  // todo create a form to take start and end point from the user and send to django for procecssing
  // todo on form submit, the start and end points are sent and points list are received as response
  return (
    <>
    <PointForm />
      {/* <MapView points={points} /> */}
    </>
  )
}

export default App
