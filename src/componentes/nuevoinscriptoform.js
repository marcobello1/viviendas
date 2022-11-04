import React from 'react';
import { Container, Row, Col, Form, Button, Jumbotron, Card } from 'react-bootstrap';
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

import '../componentes/nuevoturnoform.css';
import Cookies from "universal-cookie";
import axios from 'axios';
import * as yup from 'yup';
import {Formik, useFormik} from 'formik'
const esquema = yup.object().shape({
  nombre: yup.string().required('Debe ingresar un nombre'),
  apellido: yup.string().required('Debe ingresar un apellido'),
  email: yup.string().email('Debe ingresar un email valido').required('Debe ingresar un email'),
  dni: yup.number('Debe ingresar un número').positive().integer().required('Debe ingresar un dni'),
  telefono: yup.number('Debe ingresar un número').positive().integer().required('Debe ingresar un celular'),
  fechadenacimiento: yup.date().required('Debe ingresar una fecha de nacimiento'),
  nacionalidad: yup.string().required('Debe ingresar una nacionalidad'),
  domicilio: yup.string().required('Debe ingresar un domicilio'),
  localidad: yup.string().required('Debe ingresar una localidad'),
  ingreso: yup.string().required('Debe ingresar el ingreso familiar mensual'),
  hijos: yup.number().required('Debe seleccionar la cantidad de hijos'),
  estadocivil: yup.string().required('Debe seleccionar un estado civil'),
  discapacidad: yup.string().required('Debe seleccionar una discapacidad'),
  trabajo: yup.string().required('Debe seleccionar su trabajo'),
  plan: yup.string().required('Debe aclarar si tiene plan social'),
  dniconyugue: yup.number('El dni no puede tener letras'),
  dnihijo1: yup.number('El dni no puede tener letras')
})

function Nuevoturno () {
  const [Conyugue, setConyugue] = useState([])
  const [Hijos, setHijos] = useState([])
  const cookies = new Cookies();
  const onSubmit = (data) => {
    axios.post('http://localhost:3001/nuevoinscripto', data).then(() => {
    cookies.set('nombre', data.nombre, {path:'/'});
    cookies.set('apellido', data.apellido, {path:"/"});
    })
   
 
  window.location.href="/printinscripcion"
}
  const {values, handleChange, handleBlur, handleSubmit, isSubmitting, errors, touched, getFieldProps} = useFormik({
    initialValues: {
      nombre: '',
      apellido:'',
      email:'',
      dni: cookies.get('dni'),
      telefono: '',
      fechadenacimiento: '',
      nacionalidad: '',
      domicilio: '',
      localidad: '',
      ingreso: '',
      hijos: '',
      estadocivil: '',
      discapacidad: '',
      trabajo: '',
      plan: '',
      nombreconyugue: '',
      apellidoconyugue: '',
      dniconyugue: '',
      nombrehijo1: '',
      apellidohijo1: '',
      dnihijo1: '',
      nombrehijo2: '',
      apellidohijo2: '',
      dnihijo2: '',
      nombrehijo3: '',
      apellidohijo3: '',
      dnihijo3: '',
      nombrehijo4: '',
      apellidohijo4: '',
      dnihijo4: '',
      nombrehijo5: '',
      apellidohijo5: '',
      dnihijo5: '',
      nombrehijo6: '',
      apellidohijo6: '',
      dnihijo6: '',
      nombrehijo7: '',
      apellidohijo7: '',
      dnihijo7: '',
      nombrehijo8: '',
      apellidohijo8: '',
      dnihijo8: '',
      nombrehijo9: '',
      apellidohijo9: '',
      dnihijo9: '',
      nombrehijo10: '',
      apellidohijo10: '',
      dnihijo10: '',







    },
    validationSchema: esquema,
   onSubmit,
  })
useEffect(() =>{
  setConyugue(getFieldProps('estadocivil').value)
}, [getFieldProps('estadocivil').value])
useEffect(() => {


  if (getFieldProps('hijos').value == '1') {
    setHijos([1])
  } else if (getFieldProps('hijos').value==="2") {
    setHijos([1,2])
  } else if (getFieldProps('hijos').value==="3") {
    setHijos([1,2,3])
  } else if (getFieldProps('hijos').value==="4") {
    setHijos([1,2,3,4])
  } else if (getFieldProps('hijos').value==="5") {
    setHijos([1,2,3,4,5])
  } else if (getFieldProps('hijos').value==="6") {
    setHijos([1,2,3,4,5,6])
  } else if (getFieldProps('hijos').value==="7") {
    setHijos([1,2,3,4,5,6,7])
  } else if (getFieldProps('hijos').value==="8") {
    setHijos([1,2,3,4,5,6,7,8])
  } else if (getFieldProps('hijos').value==="9") {
    setHijos([1,2,3,4,5,6,7,8,9])
  } else if (getFieldProps('hijos').value==="10") {
    setHijos([1,2,3,4,5,6,7,8,9,10])
  } else (
    setHijos('Seleccionar...')
  )
}, [getFieldProps('hijos').value])
console.log(Hijos)
//console.log(getFieldProps('estadocivil').value);

    return(
        <div className='formulario'>

        
        <form action='/gracias' onSubmit={handleSubmit}>
                    <div className='ff'>  <p className='inscripcion'>Inscripción a viviendas</p></div>
        <section className='datospersonales'>
            <h4>Datos del aspirante</h4>
            <div className="form-row">
        <div className="form-dni">
        
            <label for="inputNbre">Nombre</label><br/>
            <input value={values.nombre} onChange={handleChange} onBlur={handleBlur} type="text" className="form-control" id="inputNombre" name='nombre' placeholder="Nombre" ></input>
          {errors.nombre && touched.nombre && <p className='error'>{errors.nombre}</p>}
          </div>
          <div className="form-dni">
            <label for="inputelido">Apellido</label>
            <input value={values.apellido} onChange={handleChange} onBlur={handleBlur} type="text" className="form-control" id="inputApellido" name='apellido' placeholder="Apellido"></input>
            {errors.apellido && touched.apellido && <p className='error'>{errors.apellido}</p>}
       </div>
       <div className="form-dni">
            <label for="inputDNI">DNI</label>
            <input value={values.dni} onChange={handleChange}onBlur={handleBlur}  type="text" className="form-control" id="inputDNI" name='dni' placeholder="DNI"></input>
            {errors.dni && touched.dni && <p className='error'>{errors.dni}</p>}
  </div>
          </div>
          
    
        <div className="form-row">
        
          <div className='form-dni'>
          <label for="Nacionalidad">Nacionalidad</label>
          <input value={values.nacionalidad} onChange={handleChange} onBlur={handleBlur} type="text" className="form-control" id="inputNombre" name='nacionalidad' placeholder="Nacionalidad" ></input>
          {errors.nacionalidad && touched.nacionalidad && <p className='error'>{errors.nacionalidad}</p>}
          </div>
          <div className='form-dni'>
          <label for="Fecha de nacimiento">Fecha de nacimiento</label>
          <input value={values.fechadenacimiento} onChange={handleChange} onBlur={handleBlur} type="date" className="form-control" id="inputNombre" name='fechadenacimiento' placeholder="Fecha de nacimiento" ></input>
          {errors.fechadenacimiento && touched.fechadenacimiento && <p className='error'>{errors.fechadenacimiento}</p>}
          </div> 
          <div className="form-dni">
          <label for="estadocivil">ESTADO CIVIL</label>
            <select value={values.estadocivil} onChange={handleChange} onBlur={handleBlur} id="civvil" className="form-control" name='estadocivil'>
            <option selected>Seleccionar...</option>
              <option>SOLTERO/A</option>
              <option >CASADO/A</option>
              <option>UNIÓN DE HECHO</option>
              <option>VIUDO/A</option>
              <option>SEPARADO/DIVORCIADO</option>
            </select>
            {errors.estadocivil && touched.estadocivil && <p className='error'>{errors.estadocivil}</p>}
          </div>
        </div>
        {(Conyugue==="CASADO/A" || Conyugue==="UNIÓN DE HECHO") && 
          <section>
            <h4>Datos del conyugue</h4>
          <div className='form-row'>
           <div className='form-3'>
           <label for="inputNombre">Nombre del conyugue</label>
             <input value={values.nombreconyugue} onChange={handleChange} onBlur={handleBlur} type="text" className="form-control" id="inputNombre" name='nombreconyugue' placeholder="Nombre del conyugue" ></input>
           </div>
           <div className='form-3'>
           <label for="inputNombre">Apellido del conyugue</label>
             <input value={values.apellidoconyugue} onChange={handleChange} onBlur={handleBlur} type="text" className="form-control" id="inputNombre" name='apellidoconyugue' placeholder="Apellido del conyugue" ></input>
           </div>
           <div className='form-3'>
           <label for="inputNombre">DNI del conyugue</label>
             <input value={values.dniconyugue} onChange={handleChange}onBlur={handleBlur} type="text" className="form-control" id="inputNombre" name='dniconyugue' placeholder="DNI del conyugue" ></input>
             {errors.dniconyugue && touched.dniconyugue && <p className='error'>{errors.dniconyugue}</p>}
           </div>
           </div>
           </section>
        }
    
        <div className='form-row'>
        <div className="form-3">
        <label for="hijos">CANTIDAD DE HIJOS</label>
            <select value={values.hijos} onChange={handleChange} onBlur={handleBlur} id="Hora" className="form-control" name='hijos'>
            <option selected>Seleccionar...</option>
            <option >1</option>
            <option >2</option>
            <option >3</option>
            <option >4</option>
            <option >5</option>
            <option >6</option>
            <option >7</option>
            <option >8</option>
            <option>9</option>
            <option >10</option>
            </select>
            {errors.hijos && touched.hijos && <p className='error'>{errors.hijos}</p>}
          
          </div>
         
          <div className="form-3">
          <label for="DISCAPACIDAD">DISCAPACIDAD</label>
            <select value={values.discapacidad} onChange={handleChange} onBlur={handleBlur} id="Hora" className="form-control" name='discapacidad'>
            <option selected>Seleccionar...</option>
            <option>NO</option>
              <option>MOTRIZ</option>
              <option>MOTRIZ VIVIENDA ADAPTADA</option>
              <option>VIUDO/A</option>
              <option>VISUAL</option>
              <option>AUDITIIVA</option>
              <option>INTELECTUAL</option>
            </select>
            {errors.discapacidad && touched.discapacidad && <p className='error'>{errors.discapacidad}</p>}
          
          </div>
          <div className='form-3'>
          <label for="DOMICILIO">DOMICILIO</label>
          <input value={values.domicilio} onChange={handleChange} onBlur={handleBlur} type="text" className="form-control" id="inputNombre" name='domicilio' placeholder="Domicilio" ></input>
          {errors.domicilio && touched.domicilio && <p className='error'>{errors.domicilio}</p>}
          </div>
        </div>
        <section>
          { Hijos !== "" && Hijos !== "Seleccionar..." && <h4>Datos del/los hijos</h4>}
          { Hijos !== "" && Hijos !== "Seleccionar..." && Hijos.map((value, key) => {
            console.log(value)
            console.log(key)
            let numero= value
            return (
              <div className='form-row'>
              <div className='form-3'>
              <label for="inputNombre">{`Nombre del hijo ${value}`}</label>
                <input onChange={handleChange} onBlur={handleBlur} type="text" className="form-control" id="inputNombre" name={`nombrehijo${value}`} placeholder="Nombre del conyugue" ></input>
              </div>
              <div className='form-3'>
              <label for="inputNombre">{`Apellido del hijo ${value}`}</label>
                <input onChange={handleChange} onBlur={handleBlur} type="text" className="form-control" id="inputNombre" name={`apellidohijo${value}`} placeholder="Apellido del conyugue" ></input>
              </div>
              <div className='form-3'>
              <label for="inputNombre">{`DNI del hijo ${value}`}</label>
                <input onChange={handleChange}onBlur={handleBlur} type="text" className="form-control" id="inputNombre" name={`dnihijo${value}`} placeholder="DNI del conyugue" ></input>
                {errors.dnihijo && touched.dnihijo && <p className='error'>{errors.dnihijo}</p>}
              </div>
              </div>
            )
          })}
        </section>
    
      </section>
      <div className='form-row'>
        <div className='form-dni'>
          <label for="LOCALIDAD">LOCALIDAD</label>
          <input value={values.localidad} onChange={handleChange} onBlur={handleBlur} type="text" className="form-control" id="inputNombre" name='localidad' placeholder="Localidad" ></input>
          {errors.localidad && touched.localidad && <p className='error'>{errors.localidad}</p>}
        </div>
        <div className='form-dni'>
          <label for="EMAIL">EMAIL</label>
          <input value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" className="form-control" id="inputNombre" name='email' placeholder="email" ></input>
          {errors.email && touched.email && <p className='error'>{errors.email}</p>}
          </div>
        <div className='form-dni'>
          <label for="TELÉFONO">TELÉFONO</label>
          <input value={values.telefono} onChange={handleChange} onBlur={handleBlur} type="text" className="form-control" id="inputNombre" name='telefono' placeholder="Celular" ></input>
          {errors.telefono && touched.telefono && <p className='error'>{errors.telefono}</p>}
          </div>
          
          <div className="form-dni">
          <label for="TRABAJO">TRABAJO</label>
          <select value={values.trabajo} onChange={handleChange} onBlur={handleBlur} id="Hora" className="form-control" name='trabajo'>
            <option selected>Seleccionar...</option>
            <option>NO</option>
              <option>DEPENDENCIA</option>
              <option>INFORMAL</option>
              <option>MONOTRIBUTO</option>
              <option>AUTÓNOMO</option>
            </select>
            {errors.trabajo && touched.trabajo && <p className='error'>{errors.trabajo}</p>}
          </div>
      </div>
      <div className='form-row'>
      <div className='form-3'>
          <label for="INGRESO FAMILIAR MENSUAL">INGRESO FAMILIAR MENSUAL</label>
          <input value={values.ingreso} onChange={handleChange} onBlur={handleBlur} type="text" className="form-control" id="inputNombre" name='ingreso' placeholder="Ingreso familiar mensual" ></input>
          {errors.ingreso && touched.ingreso && <p className='error'>{errors.ingreso}</p>}
          </div>
          <div className="form-3">
          <label for="PLAN SOCIAL/AUH">PLAN SOCIAL/AUH</label>
          <select value={values.plan} onChange={handleChange} onBlur={handleBlur} id="Hora" className="form-control" name='plan'>
            <option selected>Seleccionar...</option>
            <option>SI</option>
            <option>NO</option>
            
            </select>
            {errors.plan && touched.plan && <p className='error'>{errors.plan}</p>}
          </div>
          <div className='form-3'>
          <label for="OBSERVACIÓN">OBSERVACIÓN</label>
            <input  onChange={handleChange} onBlur={handleBlur} type="text" className="form-control" id="OBSERVACIÓN" name="observacion" placeholder="OBSERVACIÓN"></input>
           
          </div>
        </div>
            
    
        <div className='button'>
            <button disabled={isSubmitting} type="submit" className="btn btn-primary">ENVIAR</button>
        </div>
        
      </form>
   
      </div>
    );
}
export default Nuevoturno;
/*
  <div className='form-row'>
        <div className='form-check-div'>
           <label title="vivienda-adaptada" className='form-check-label' for='flexCheckDefault'>SOLICITA VIVIENDA ADAPTADA PARA SILLA DE RUEDAS</label>
          <input name='vivienda-adaptada' type='checkbox' className='form-check-imput' id='flexCheckDefault'></input>
        </div>
      </div>

*/