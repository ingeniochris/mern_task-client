import React, {useReducer} from 'react';
import uuid from 'uuid/dist/v4'


import taskContext from '../../context/Tasks/taskContext';
import taskReducer from '../../context/Tasks/taskReducer';

import {
    TASK_PROJECT,
    ADD_TASK,
    VALID_TASK,
    DELETE_TASK,
    STATE_TASK,
    SELECT_TASK,
    UPDATE_TASK,
    CLEAN_FORMTASK
} from '../../types';

const TaskState = props => {

    const initialState = {
        tasks:[
            {id:1, name:'Elegir plataforma', state:true, projectId:1},
            {id:2, name:'Elegir colores', state:false, projectId:2},
            {id:3, name:'Elegir pagos', state:false, projectId:3},
            {id:4, name:'Elegir hosting', state:true, projectId:4},
            {id:5, name:'Elegir colores', state:false, projectId:2},
            {id:6, name:'Elegir pagos', state:false, projectId:1},
            {id:7, name:'Elegir hosting', state:true, projectId:3},
            {id:8, name:'Elegir colores', state:false, projectId:4},
            {id:9, name:'Elegir pagos', state:false, projectId:3},
            {id:10, name:'Elegir hosting', state:true, projectId:1},
            {id:11, name:'Elegir colores', state:false, projectId:2},
            {id:12, name:'Elegir pagos', state:false, projectId:2},
            {id:13, name:'Elegir hosting', state:true, projectId:4}
        ],
        tasksproject:null,
        errorform:false,
        selecttaskedit:null
    }

    const [state, dispatch]= useReducer(taskReducer, initialState);


    //crear funciones

    //obtener tareas de un proyecto
    const getTasks = projectId =>{
        dispatch({
            type: TASK_PROJECT,
            payload: projectId
        })
    }

    //AGREGAR TAREA
    const addTask = task => {
        task.id = uuid();
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    const validTask = _ => {
        dispatch({
            type: VALID_TASK
        })
    }

    const deleteTask = id =>{
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }

    const changeStateTask = task => {
        dispatch({
            type: STATE_TASK,
            payload: task
        })
    }

    const selectTaskEdit = task => {
        dispatch({
            type: SELECT_TASK,
            payload: task
        })
    }

    const updateTask = task =>{
        dispatch({
            type: UPDATE_TASK,
            payload: task
            })
    }

    const cleanFormTask =()=>{
        dispatch({
            type: CLEAN_FORMTASK
        })
    }

    return(
        <taskContext.Provider
            value={{
                tasks: state.tasks,
                tasksproject: state.tasksproject,
                errorform: state.errorform,
                selecttaskedit: state.selecttaskedit,
                getTasks,
                addTask,
                validTask,
                deleteTask,
                changeStateTask,
                selectTaskEdit,
                updateTask,
                cleanFormTask
            }}
        >
            {props.children}
        </taskContext.Provider>
    )

}


export default TaskState;