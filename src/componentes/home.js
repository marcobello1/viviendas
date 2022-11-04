import React from "react";
import { useState } from "react";
import Cookies from "universal-cookie";
import Banner from '../viviendas.jpg';
import Logo from '../logo san nicolas.svg';
import './home.css'
import { set } from "react-hook-form";
function Home () {
    const [Dni,setDni] = useState([])
    const handleChange = e => {
        setDni(e.target.value);
        console.log(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
      const cookies = new Cookies();
      cookies.set('dni', Dni, {path:'/'})
        window.location.href="/nuevoinscripto"
    }
    return(
        <div className="container-fluid">
        <div className="row">
        
          <div className="login">
            <div className="logicxn">
            <div className="brand-wrapper">
              
              
            </div>
            <div className="login-form">
              <img
                src={Logo}
                alt="logo"
                className="logo"
               style={{ width: '200px', height: '61,15px'}}
              />
              
              <form onSubmit={handleSubmit}>
                <p>INSCRIPCIÓN A VIVIENDAS</p>
                <div className="form-group">
                  <label>Ingresar DNI</label>
                  <input
                    type="text"
                    className='form-control'
                    placeholder="DNI"
                    onChange={handleChange}
                    name="dni"
                  />
                </div>
                <button type="submit">Ingresar a la Inscripción</button>
              </form>
            </div>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img src={Banner} alt="login image" className="login-img" />
          </div>
        </div>
      </div>
    )
}
export default Home;