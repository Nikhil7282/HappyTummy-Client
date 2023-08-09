import './App.css';
import {Route,Routes} from "react-router-dom"
// import {useState,useEffect} from 'react'
// import AppLayout from './Layouts/AppLayout';
import Header from './components/Header';
import Restaurants from './pages/Restaurants';
import RestaurantDetails from './pages/RestaurantDetails';
import Cart from './components/Cart';
// import Navigationsidebar from './components/Navigationsidebar';
// import RestarantCArd from './components/RestarantCArd';

export const url="http://localhost:8000"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Restaurants/>}/>
        <Route path='/restaurant/:id' element={<RestaurantDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
