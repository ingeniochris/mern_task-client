import React, {useContext} from 'react';
import projectContext from '../../context/Projects/projectContext'



const Project = ({project}) => {

    const projectsContext = useContext(projectContext);
    const{ nowProject } = projectsContext;

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={()=> nowProject(project.id)}
            >{project.name} </button>
        </li>
    )
}

export default Project
