import React, {useContext} from 'react';
import projectContext from '../../context/Projects/projectContext';
import taskContext from '../../context/Tasks/taskContext';

const Task = ({task}) => {

    const projectsContext = useContext(projectContext);
    const {project} = projectsContext;

    const tasksContext = useContext(taskContext);
    const {deleteTask, getTasks, changeStateTask, selectTaskEdit}= tasksContext;


    const [selectProject] = project; 

    //funcion para eliminar
    const taskDelete = id =>{
        deleteTask(id)
        getTasks(selectProject.id)
    }

    const changeState= task =>{
        if(task.state){
            task.state=false;
        }else{
            task.state=true;
        }
        changeStateTask(task);
    }

    const selectTaskForEdit = task => {
        selectTaskEdit(task);
    }

    return (
       <li className="tarea sombra">
           <p>{task.name}</p>
           <div className="estado">
               {task.state
               ? (
                   <button
                    type="button"
                    className="completo"
                    onClick={()=> changeState(task)}
                   >
                       Completo
                   </button>
               )
               : (
                   <button
                    type="button"
                    className="incompleto"
                    onClick={()=> changeState(task)}
                   >
                       Incompleto
                   </button>
               )
               }
           </div>
           <div className="acciones">
               <button
                    type="button"
                    className="btn btn-primario"
                    onClick={()=> selectTaskForEdit(task)}
               >
                   Editar
               </button>
               <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={()=> taskDelete(task.id)}
               >
                   Eliminar
               </button>
           </div>
       </li>
    )
}

export default Task
