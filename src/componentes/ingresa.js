import React from 'react';
import * as yup from 'yup';
import {useFormik} from 'formik';
import '../componentes/nuevoturnoform.css'
const esquema = yup.object().shape({
  nombre: yup.string().required('Debe ingresar un nombre'),
  contraseña: yup.string().required('Debe ingresar una contraseña'),
})
const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve,1000));
  actions.resetForm();
}
function Ingresa () {
  const {values, handleChange, handleBlur, handleSubmit, isSubmitting, errors, touched} = useFormik({
    initialValues: {
      nombre: '',
     contraseña: '',
    },
    validationSchema: esquema,
   onSubmit,
  })
  console.log(values);
  console.log(errors);
  console.log(touched);
    return(
        <div className='formulario-2'>
        <h2>INICIÁ SESIÓN!</h2>
        <form action='/gracias' className='ingresar' onSubmit={handleSubmit}>
        <div className="form-1">
            <label for="inputNombre">Nombre</label>
            <input value={values.nombre} onChange={handleChange} onBlur={handleBlur} type="text" className="form-control" id="inputNombre" name='nombre' placeholder="Nombre" ></input>
          {errors.nombre && touched.nombre && <p className='error'>{errors.nombre}</p>}
          </div>
          <div className="form-nombre">
            <label for="inputNombre">Contraseña</label>
            <input value={values.contraseña} onBlur={handleBlur} onChange={handleChange} type="password" className="form-control" name='contraseña' id="inputContraseña" placeholder="Contraseña"></input>
            {errors.contraseña && touched.contraseña && <p className='error'>{errors.contraseña}</p>}
          </div>
        <div className='buttoningresar'>
            <button disabled={isSubmitting} type="submit" className="btn btn-primary">iniciar sesión</button>
        </div>
        
      </form>
      </div>
    );
}
export default Ingresa;