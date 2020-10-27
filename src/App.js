import React, {Fragment, useState} from 'react'
import Formulario from './components/Formularios'
import Cita from './components/Cita'

function App() {

  const [citas, setCitas] = useState([])


  //Funcion que toma las citas actuales y agrega la nueva
  const crearCita = cita => {
    setCitas([
      ...citas,
      cita
    ])
  }

  //Función que elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    setCitas(nuevasCitas)
  }

  return (
    <Fragment>
      <h1>Administrador de pacientes </h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita}/>
          </div>    
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
        
    </Fragment>
  );
}

export default App;
