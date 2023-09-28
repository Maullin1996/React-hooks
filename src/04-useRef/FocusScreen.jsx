import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {

        //Para que al momento de dar click se seleccione lo que esta
        //en la casilla de texto
        //forma 1 poco eficicente
        //document.querySelector('input').select();
        inputRef.current.select();
    }

  return (
    <>
        <h1>FocusScreen</h1>
        <hr />

        <input  

            ref={ inputRef }        
            type="text"
            placeholder="Ingrese su nombre"
            className="form-control"
        
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={  onClick }>
            set focus
        </button>

        
    </>
  )
}
