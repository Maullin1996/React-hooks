import { useCounter } from '../hooks/useCounter';


export const CounterWithCustomHook = () => {

    const {counter, incrementar, decrementar, reset} = useCounter();

    useCounter
    return (
        <>
        <h1>Counter With Hook: {counter} </h1>
        <hr />

        <button className="btn btn-primary" onClick={ () => incrementar(2) }>+1</button>
        <button className="btn btn-primary" onClick={reset}>Reset</button>
        <button className="btn btn-primary" onClick={ () => decrementar(2) }>-1</button>
        </>
    )
}

/* Dependiendo de lo que se retorne se puede desesttucturar como objeto {}
o como arreglo[] */
