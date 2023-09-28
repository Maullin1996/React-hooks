import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {

    const { formState, onImputChange, onResetform  } = useForm({
        username: '',
        email: '',
        password: '',
    });

    const {username, email, password} =  formState;



        /* se recomienda tener varios useEffect que tiener uno de forma global */

        /* si solo quiero que sea llamado una solo vez, hago un arreglo vacio */

        useEffect(() => {
           // console.log('useEffect called!');
        }, []);

        /* si solo quiero que se dispare cuando el fromState cambie */

        useEffect(() => {
            //console.log('useEffect called!');
        }, [formState]);

        /*si solo quiero que se dispare cuando el email cambie */

        useEffect(() => {
            //console.log('useEffect called!');
        }, [ email ]);

    return (

        <>
        
        <h1>Formulario Con Custon Hook</h1>
        <hr />

        <input 
            type="text"
            className="from-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onImputChange }
        />

        <input 
            type="email"
            className="from-control mt-2"
            placeholder="llanosmauricio10@gmail.com"
            name="email"
            value={ email }
            onChange={ onImputChange }
        />

        <input 
            type="password"
            className="from-control mt-2"
            placeholder="Contraseña"
            name="password"
            value={ password }
            onChange={ onImputChange }
        />

        <button onClick={ onResetform } className="btn btn-primary mt-2" >Borrar</button>

        </>
    );
}

//Para separar los holders en el className se pone mt-2
//en javascrip existe las propiedades computadas de los objetos que se
//colocan entre [] en una desestructuración
/*el uses effect se utliza para disparar efecto secundarios */
