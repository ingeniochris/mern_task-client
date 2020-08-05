import React, {Fragment, useContext} from 'react';
import Task from './Task';

import projectContext from '../../context/Projects/projectContext'

const ListTasks = () => {

    const projectsContext = useContext(projectContext);
    const {project, deleteProject} = projectsContext;

    //Se verifica porque en un inicio el project llega = null
    if(!project) return <h2>Selecciona un proyecto</h2>;

    //destructurin para obtener el elemento [0] del array project
    const [selectProject] = project; 

    const task = [
        {name:'Elegir plataforma', state:true},
        {name:'Elegir colores', state:false},
        {name:'Elegir pagos', state:false},
        {name:'Elegir hosting', state:true}
    ]


    const onClickDelete = _ => {
        deleteProject(selectProject.id)
    }

    return (
        <Fragment>
            <h2>Proyecto: {selectProject.name}</h2>
            <ul className="listado-tareas">
                {task.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : task.map(task=>(
                         <Task 
                         task={task}
                         />   
                    ))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickDelete}
            >
                Eliminar Proyecto
            </button>
        </Fragment>
    )
}

export default ListTasks
