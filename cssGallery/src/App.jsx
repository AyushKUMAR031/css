import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GridGallery from './components/GridGallery/GridGallery';
import Hover3d from './components/Hover3D/Hover3d';
import NavBar from './components/NavBar/navbar';
import PhotoCard from './components/PhotoCard/photoCard';
import MouseFlowEffect from './components/ColorfullPointer/MouseFlowEffect';
import StaticPage from './components/WebPage/staticPage';
import ImageShadow from './components/ImageShadow/imageShadow';
import Responsive from './components/ResponsiveLayout/responsive';
import Face from './components/Face/face';

export default function App(){
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GridGallery />} />
          <Route path="/card1" element={<Hover3d />} />
          <Route path="/card2" element={<NavBar />} />
          <Route path="/card3" element={<PhotoCard />} />
          <Route path="/card4" element={<MouseFlowEffect />} />
          <Route path="/card5" element={<StaticPage />} />
          <Route path="/card6" element={<ImageShadow />} />
          <Route path="/card7" element={<Responsive/>} />
          <Route path="/card8" element={<Face/>} />
        </Routes>
      </Router>
    </>
  )
}