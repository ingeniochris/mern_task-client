import React, { useReducer } from "react";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {FORM_PROJECT, GET_PROJECT} from '../../types'




const ProjectState = (props) => {

    const projects = [
        {id:1, name:'Tienda virtual'},
        {id:2, name:'Intranet'},
        {id:3, name: 'diseño web'},
        {id:4, name: 'MERN'}
    ]

  const initialState = {
    projects:[], 
    formVisible: false,
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

  return (
    <projectContext.Provider
      value={{
        projects: state.projects, 
        formVisible: state.formVisible,
        seeForm,
        getProjects
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
