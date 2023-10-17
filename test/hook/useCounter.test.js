const { renderHook, act } = require("@testing-library/react")
const { useCounter } = require("../../src/hooks/useCounter")

describe('Pruebas en el useCounter', () => {
    test('Debe de retornar los valores por defecto', () => {
        /*el renderhook permite renderizar un hook
        el cual regresa la informacion de mo el hook 
        se encuentra en ese momento*/
        const {result} = renderHook( () => useCounter() );
        const { counter, incrementar, decrementar, reset } = result.current;
        expect( counter ).toBe(10);
        expect( decrementar ).toEqual( expect.any( Function ) );
        expect( incrementar ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );

    });
    test('Dede de generar el counter con el valor de 100', () => {
        const {result} = renderHook( () => useCounter(100) );
        expect( result.current.counter ).toBe(100);
    });
    test('Debe de incrementar el contador', () => {
        const {result} = renderHook( () => useCounter() );
        const { counter, incrementar } = result.current;
        act( () => {
            incrementar();
        } );
        /*cuando se trabaja con numeros primitivos string, booleano
        número estos valores se extraen y se crea una nueva variables 
        por lo que no actualiza el valor de counter y para ver el nuevo
        valor hay que hacer los de la siguente forma: */
        expect( result.current.counter ).toBe(11);
    });
    test('Debe de decrementar el contador', () => {
        const {result} = renderHook( () => useCounter() );
        const { counter, decrementar } = result.current;
        act( () => {
            decrementar();
        } );
        expect( result.current.counter ).toBe(9);
    });
    test('Debe de resetear el contador', () => {
        const {result} = renderHook( () => useCounter() );
        const { counter, decrementar, reset } = result.current;
        act( () => {
            decrementar(2);
            reset();
        } );
        expect( result.current.counter ).toBe(10);
    });
})
