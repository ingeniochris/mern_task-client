import {FORM_PROJECT, 
    GET_PROJECT,
    ADD_PROJECT,
    VALID_PROJECTS,
    NOW_PROJECT,
    DELETE_PROJECT
  } from '../../types';

export default (state, action) => {
  switch (action.type) {
    case FORM_PROJECT:
        return{
            ...state,
            formvisible:true
        }
    case GET_PROJECT:
        return{
            ...state,
            projects: action.payload
        }
    case ADD_PROJECT:
        return {
            ...state,
            projects:[...state.projects, action.payload],
            formvisible:false,
            errorform:false
        }
    case VALID_PROJECTS:
        return{
            ...state,
            errorform:true
        } 
    case NOW_PROJECT:
        return{
            ...state,
            project: state.projects.filter(project=> project.id===action.payload)
        }    
    case DELETE_PROJECT:
        return{
            ...state,
            projects: state.projects.filter(project=> project.id !== action.payload),
            project:null
        }       
    default:
      return state;
  }
};