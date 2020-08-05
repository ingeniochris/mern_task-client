import React, {Fragment, useState, useContext} from 'react';

import projectContext from '../../context/Projects/projectContext'

const NewProject = () => {

    const projectsContext = useContext(projectContext);
    const {formVisible, seeForm}= projectsContext

    const [proyect, setProject]=useState({
        name:''
    })

    const {name}= proyect;

    const onChangeProject= e =>{
        setProject({
            ...proyect,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitProject = e => {
        e.preventDefault();

        //validar

        //agregar state

        //reiniciar el state
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
        {formVisible ?
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
            : null

        }
    </Fragment>
    )
}

export default NewProject
