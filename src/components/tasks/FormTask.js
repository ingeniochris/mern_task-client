import React, {useContext} from 'react';
import projectContext from '../../context/Projects/projectContext'

const FormTask = () => {

    const projectsContext = useContext(projectContext);
    const {project} = projectsContext;

    if(!project) return null;

     //destructurin para obtener el elemento [0] del array project
     const [selectProject] = project; 

    return (
        <div className="formulario">
            <form 

            >
                <div className="contenedor-input">
                    <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre tarea..."
                    name="name"
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                    type="text"
                    className="btn btn-primario btn-submit btn-block"
                    value="Agregar tarea"
                    />
                </div>
            </form>
        </div>
    )
}

export default FormTask
