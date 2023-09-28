import { useEffect, useState } from 'react';
import { Messaje } from './Messaje';

export const SimpleForm = () => {

        const [formState, setFormState] = useState({
            username: 'mauro',
            email: 'llanosmauricio10@gmail.com'
        });

        const { username, email } = formState

        const onImputChange = ({target}) => {

            const { name, value } = target;
            setFormState({
                ...formState,
                [ name ]: value
            });

        }

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
        
        <h1>Formulario Simple</h1>
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

        {
            ( username=='mauro' ) && < Messaje />
        }
        </>
    );
}

//Para separar los holders en el className se pone mt-2
//en javascrip existe las propiedades computadas de los objetos que se
//colocan entre [] en una desestructuración
/*el uses effect se utliza para disparar efecto secundarios */
