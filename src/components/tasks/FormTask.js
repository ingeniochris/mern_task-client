import React, {useContext, useState, useEffect} from 'react';
import projectContext from '../../context/Projects/projectContext';
import taskContext from '../../context/Tasks/taskContext';

const FormTask = () => {

    const projectsContext = useContext(projectContext);
    const {project} = projectsContext;

    const tasksContext = useContext(taskContext);
    const {selecttaskedit, errorform, addTask, validTask, getTasks, updateTask, cleanFormTask} = tasksContext;

    const [task, setTask]=useState({
        name:''
    });
    const {name}=task;

    useEffect(() => {
        if(selecttaskedit !== null){
            setTask(selecttaskedit)
        }else{
            setTask({
                name:''
            })
        }

    }, [selecttaskedit])

    if(!project) return null;

     //destructurin para obtener el elemento [0] del array project
     const [selectProject] = project; 

    const handleChange = e =>{
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //validar form
        if(name.trim()===''){
            validTask();
            return
        }

        //pasar validacion
        if(selecttaskedit === null){
           //agregar nueva tarea
        task.projectId = selectProject.id;
        task.state = false;
            addTask(task);
        }else{
            updateTask(task);
            cleanFormTask();
        }




        
        

        //obtener tareas
        getTasks(selectProject.id)

            //reiniciar el form
            setTask({
                name:''
            })
    }

    return (
        <div className="formulario">
            <form 
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre tarea..."
                    name="name"
                    onChange={handleChange}
                    value={name}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                    type="submit"
                    className="btn btn-primario btn-submit btn-block"
                    value={selecttaskedit ? '**== Editar tarea ==**' : 'Agregar Tarea'}
                    />
                </div>
            </form>
            {errorform ? <p className="mensaje error">El nombre de la tarea es obligatorio </p>   : null}
        </div>
    )
}

export default FormTask
