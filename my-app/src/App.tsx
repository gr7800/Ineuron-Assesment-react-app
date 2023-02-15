import React from 'react';
import "./App.css"
import MainRoutes from './Allroutes/MainRoutes';
import './App.css';
import Footer from './componets/Footer';
import Navbar from './componets/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar />
     <MainRoutes/>
     <Footer />
    </div>
  );
}

export default App;
