import React, { useReducer } from "react";
import uuid from 'uuid/dist/v4';

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {FORM_PROJECT, 
        GET_PROJECT,
        ADD_PROJECT,
        VALID_PROJECTS,
        NOW_PROJECT,
        DELETE_PROJECT
      } from '../../types';




const ProjectState = (props) => {

    const projects = [
        {id:1, name:'Tienda virtual'},
        {id:2, name:'Intranet'},
        {id:3, name: 'diseño web'},
        {id:4, name: 'MERN'}
    ]

  const initialState = {
    projects:[], 
    formvisible: false,
    errorform: false,
    project: null
  };


  //dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(projectReducer, initialState);

  //serie de funciones
  const seeForm = () => {
      dispatch({
          type: FORM_PROJECT
      })
  }

  //obtener proyectos
  const getProjects = () => {
        dispatch({
            type: GET_PROJECT,
            payload: projects
        })
  }

  //agregar proyecto
  const addProject = project => {
    project.id= uuid();
    dispatch({
      type: ADD_PROJECT,
      payload: project
    })
  }

  //Validar formulario de agregar proyecto
  const seeErrorForm = () => {
    dispatch({
      type: VALID_PROJECTS
    })
  }

  //selecciona proyecto actual
  const nowProject = projectId =>{
    dispatch({
      type: NOW_PROJECT,
      payload: projectId
    })
  }

  //Borrar un proyecto
  const deleteProject = projectId => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId
    })
  }

  return (
    <projectContext.Provider
      value={{
        projects: state.projects, 
        formvisible: state.formvisible,
        errorform: state.errorform,
        project:state.project,
        seeForm,
        getProjects,
        addProject,
        seeErrorForm,
        nowProject,
        deleteProject
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
