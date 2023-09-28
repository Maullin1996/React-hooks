import { useEffect, useState } from "react"

export const Messaje = () => {

    const [coords, setCoords] = useState({ x:0, y: 0 });

    useEffect(() => {

        const onMouseMove = ({ x, y }) => {
            //const coords = { x, y };
            setCoords({ x, y});
        }

        window.addEventListener( 'mousemove', onMouseMove );
        
        return () => {

            window.removeEventListener( 'mousemove', onMouseMove );
        }
    }, []);
    

  return (
    <>
    
        <h3>Ususario ya existe</h3>
        {/* se utiliza la función JSON.stringify para poder graficar un objeto 
        directamente por lo que se tiene que pasar por un string o extraerlo de
        forma independiente*/}
        {JSON.stringify( coords )}

    </>
  )
}
