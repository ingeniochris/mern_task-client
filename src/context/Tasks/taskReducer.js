
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

export default (state, action) => {
    switch(action.type){
        case TASK_PROJECT:
            return{
                ...state,
                tasksproject: state.tasks.filter(task=>task.projectId === action.payload)
            }
        case ADD_TASK:
            return{
                ...state,
                tasks : [action.payload, ...state.tasks],
                errorform:false
            }    
        case VALID_TASK:
            return{
                ...state,
                errorform:true
            } 
        case DELETE_TASK:
            return{
                ...state,
                tasks: state.tasks.filter(task=>task.id !== action.payload)
            } 
        case UPDATE_TASK:    
        case STATE_TASK:
            return{
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)    
            }      
        case SELECT_TASK:
            return{
                ...state,
                selecttaskedit:action.payload
            }
        case CLEAN_FORMTASK:
            return{
                ...state,
                selecttaskedit:null
            }    
        default:
            return{
                state
            }
    }
}