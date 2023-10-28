import { todoReducer } from "../../src/08-useRducer/todoReducer";


describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }];
    
    test('Debe de regresar el estado inicial', () => {
        const newState = todoReducer( initialState, {} );
        expect( newState ).toBe( initialState );
    });

    test('Debe de agregar un todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };
        const newState = todoReducer( initialState, action );
        //console.log(newState)
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );
    });

    test('Debe de eliminar un TODO', () => {

        const id = 1;

        const action = {
            type: '[TODO] Remove Todo',
            payload: id 
        }
        
        const deleteTodo = todoReducer(initialState, action);
        expect( deleteTodo.length ).toBe(0);
        expect(deleteTodo).toEqual([]); 
    });

    test('Dede de realizar el Toggle del todo', () => {

        const id = 1;

        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }

        const Toggleid = todoReducer(initialState, action);
        /*Toggleid[0].done en la posicion 1 en el elemento done*/
        expect( Toggleid[0].done ).toBeTruthy();
        expect( Toggleid[0].done ).toStrictEqual( true );
        expect( Toggleid ).not.toEqual([ ...initialState, action.payload ])


    });
});