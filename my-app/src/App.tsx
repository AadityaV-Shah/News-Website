import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from './components/Topbar';
import Herobar from './components/Herobar';
import Navbar from './components/Navbar';
import Mainposts from './components/mainposts/Mainposts';
import Secposts from './components/secposts/Secposts';

const App: React.FC = () => {
  return (
    <>
        <Topbar />
        <Herobar />
        <Navbar />
        <Mainposts />
        <Secposts />
    </>
  );
};

export default App;