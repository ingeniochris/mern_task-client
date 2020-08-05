import React, {Fragment} from 'react';
import Task from './Task'

const ListTasks = () => {

    const task = [
        {name:'Elegir plataforma', state:true},
        {name:'Elegir colores', state:false},
        {name:'Elegir pagos', state:false},
        {name:'Elegir hosting', state:true}
    ]

    return (
        <Fragment>
            <h2>Proyecto: Tienda virtual</h2>
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
            >
                Eliminar Proyecto
            </button>
        </Fragment>
    )
}

export default ListTasks
