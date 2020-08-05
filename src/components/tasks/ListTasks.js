import React, {Fragment, useContext} from 'react';
import Task from './Task';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import projectContext from '../../context/Projects/projectContext';
import taskContext from '../../context/Tasks/taskContext';

const ListTasks = () => {

    const projectsContext = useContext(projectContext);
    const {project, deleteProject} = projectsContext;

    const tasksContext = useContext(taskContext);
    const { tasksproject }= tasksContext;

    //Se verifica porque en un inicio el project llega = null
    if(!project) return <h2>Selecciona un proyecto</h2>;

    //destructurin para obtener el elemento [0] del array project
    const [selectProject] = project; 

 


    const onClickDelete = _ => {
        deleteProject(selectProject.id)
    }

    return (
        <Fragment>
            <h2>Proyecto: {selectProject.name}</h2>
            <ul className="listado-tareas">
                {tasksproject.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : <TransitionGroup>
                        {
                            tasksproject.map(task=>(
                                <CSSTransition
                                    key={task.id}
                                    timeout={200}
                                    className="tarea"
                                >
                                    <Task task={task}/>
                                </CSSTransition>   
                            ))
                        }
                    </TransitionGroup>
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
