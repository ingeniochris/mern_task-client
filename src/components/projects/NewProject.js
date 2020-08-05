import React, {Fragment, useState, useContext} from 'react';

import projectContext from '../../context/Projects/projectContext'

const NewProject = () => {

    const projectsContext = useContext(projectContext);
    const {formvisible, errorform, seeForm, addProject, seeErrorForm, nowProject}= projectsContext

    const [project, setProject]=useState({
        name:''
    })

    const {name}= project;

    const onChangeProject= e =>{
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitProject = e => {
        e.preventDefault();

        //validar
        if(name === ''){
            seeErrorForm();
            return
        };

        //agregar state
        addProject(project);

        //reiniciar el state
        setProject({
            name:''
        })
    }

    const onClick = _ =>{
        seeForm();
    } 

    return (
    <Fragment>
        <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={onClick}
        >
            Nuevo proyecto
        </button>
        {formvisible ?
            (
                <form
            className="formulario-nuevo-proyecto"
            onSubmit={onSubmitProject}
        >
            <input 
                type="text"
                className="input-text"
                placeholder="Nombre proyecto"
                name='name'
                value={name}
                onChange={onChangeProject}
            />
            <input 
                type="submit"
                className="btn btn-primario btn-block"
                value="Agregar Proyecto"
            />
            </form>
            )
            : null }

            {errorform ? <p className="mensage error">Antes de agregar llene el formulario</p> : null}
    </Fragment>
    )
}

export default NewProject
