import React from 'react';

export const ShowIncrement = React.memo(({increment}) => {

    console.log('Me volví a generar :(')

  return ( 
    <button
    className="btn btn-primary"
    onClick={() => {
        // increment();
        increment(5);
    }}
    >
        Incrementar
    </button>
  )
})

//ahora si se le manda un argumento al padre para que incremente de 5
//en 5 se tiene que hacer lo siguiente en el padre
// (value) => {
//   setCounter( (c) => c + 1 );
