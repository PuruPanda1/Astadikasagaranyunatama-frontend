import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css'
import MapView from './components/MapView'
import PointForm from './components/PointForm'
import BlockLoader from './components/BlockLoader';
import Home from './components/Home';
import Hero from './components/Hero';


function App() {
  return (
    <Router>
      <Routes >
        <Route  path="/" element={<Home/>} />
        <Route  path="/hero" element={<Hero/>} />
        <Route  path="/input-form" element={<PointForm/>} />
        <Route path="/map-view" element={<MapView/>} />
        <Route path="/loader" element={<BlockLoader/>} />
      </Routes >
    </Router>
  )
}

export default App
