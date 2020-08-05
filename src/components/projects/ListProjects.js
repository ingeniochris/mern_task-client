import React, {useContext,useEffect} from 'react';
import Project from './Project';
import projectContext from '../../context/Projects/projectContext'

const ListProjects = () => {

    //extraer proyectos de state inicial
    const projectsContext = useContext(projectContext);
    const {projects, getProjects}=projectsContext;

    //Carga para revisar si tenemos proyectos 
    useEffect(()=>{
        getProjects();
    },[]);

    //verificar si de inicio tiene proyectos
    if(projects.length===0) return <p>No hay proyectos, comienza creando uno</p>

   

    return (
        <ul>
            {projects.map(project=>(
                <Project 
                key={project.id}
                project={project}
                
                />
            ))}
        </ul>
    )
}

export default ListProjects
