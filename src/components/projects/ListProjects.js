import React, {useContext,useEffect} from 'react';
import Project from './Project';
import projectContext from '../../context/Projects/projectContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ListProjects = () => {

    //extraer proyectos de state inicial
    const projectsContext = useContext(projectContext);
    const {projects, getProjects}=projectsContext;

    //Carga para revisar si tenemos proyectos 
    useEffect(()=>{
        getProjects();
        // eslint-disable-next-line
    },[]);

    //verificar si de inicio tiene proyectos
    if(projects.length===0) return <p>No hay proyectos, comienza creando uno</p>

   

    return (
        <ul>
            <TransitionGroup>
            {projects.map(project=>(
                <CSSTransition
                key={project.id}
                timeout={200}
                classNames="proyecto"
                >
                    <Project 
                        
                        project={project}
                
                    />  
                </CSSTransition>
            ))}
            </TransitionGroup>
        </ul>
    )
}

export default ListProjects
