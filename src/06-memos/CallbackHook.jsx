import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './Showincrement';

export const CallbackHook = () => {

    

    const [counter, setCounter] = useState(10);

    const increment = useCallback(
    (value) => {
        setCounter( (c) => c + value );
    },
    [],
    )

    /*Si se manda a llamar la función incrementar y si 
    no se estuviese ultizando el hook memo para el 
    efecto la funcion siempre seria diferente cada vez
    que cambie el estado por lo que haría un ciclo infinito
    ya que el mismo efecto dispara el redibujo por lo que la
    funcion apuntar a un espacio de momeria diferente por lo que
    se genera un ciclo infinito*/

    useEffect(() => {

      //increment();

    }, [increment])
    
    

    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

  return (
    <>
    
    <h1> useCallback: { counter } </h1>
    <hr />

    <ShowIncrement increment={ increment }/>

    </>
  )
}

//el useCallback sirve para memorizar funciones
//cada vez que se ejecuta una función en react se guarda en lugar
//distinto en la memoriza.
