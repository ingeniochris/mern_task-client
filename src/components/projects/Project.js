import React, {useContext} from 'react';
import projectContext from '../../context/Projects/projectContext'
import taskContext from '../../context/Tasks/taskContext';


const Project = ({project}) => {

    const projectsContext = useContext(projectContext);
    const{ nowProject } = projectsContext;

    const tasksContext = useContext(taskContext);
    const { getTasks }= tasksContext;

    //Funcion para seleccionar el proyecto actual y filtar las tareas del proyecto seleccionado
    const selectProjectAndTasks = projectId =>{
        nowProject(projectId)
        getTasks(projectId)
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={()=> selectProjectAndTasks(project.id)}
            >{project.name} </button>
        </li>
    )
}

export default Project
