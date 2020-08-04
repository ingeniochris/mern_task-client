import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const Register = () => {
    const [user, setUser]=useState({
        name:'',
        email:'',
        password:'',
        confirPassword:''
    });
    const {name, email, password, confirPassword}=user;
    const onChange = e =>{

    }

    const onSubmit = e => {
        e.preventDefault();

        //validar campos vacios


        //password minimo 6 caracteres


        //los 2 password son iguales


        //pasarlo a action
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Registro</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Nombre</label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tu Nombre"
                            value={name}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirPassword">Confirmar Password</label>
                        <input 
                            type="password"
                            id="confirPassword"
                            name="confirPassword"
                            placeholder="Confirma tu Password"
                            value={confirPassword}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión" />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar
                </Link>
            </div>
        </div>
    )
}

export default Register
