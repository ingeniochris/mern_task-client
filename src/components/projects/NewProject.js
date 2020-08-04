import React, {Fragment, useState} from 'react'

const NewProject = () => {

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

    return (
    <Fragment>
        <button
            type="button"
            className="btn btn-block btn-primario"
        >
            Nuevo proyecto
        </button>
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
    </Fragment>
    )
}

export default NewProject
