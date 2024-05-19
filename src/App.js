import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from './pages/SingleProduct';
import One from './pages/One';
import Three from './pages/Three';
import { useState } from 'react';

function App() {
 
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/xyz' element={<Cart/>}/>
          <Route path='/single' element={<SingleProduct/>}/>
          <Route path='/one' element={<One/>}/>
      

      </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
