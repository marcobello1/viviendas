import Navbar from './componentes/navbar.js';

import Footer from './componentes/footer.js';
import Printinscripcion from './componentes/printinscripcion.js';
import Home from './componentes/home.js';
import Ingresa from './componentes/ingresa.js'
import Nuevoinscriptoform from './componentes/nuevoinscriptoform.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route, BrowserRouter, Link, Switch} from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<div> <Navbar/> <Home/></div>}></Route>
    <Route path='/nuevoinscripto' element={<div> <Navbar/> <Nuevoinscriptoform/></div>}></Route>
    <Route path='/ingresa' element={<div><Navbar/> <Ingresa/></div>}></Route>
    <Route path='/printinscripcion' element={<div><Navbar/> <Printinscripcion/></div>}></Route>
    </Routes>
    </BrowserRouter>
   
     );
}

export default App;
