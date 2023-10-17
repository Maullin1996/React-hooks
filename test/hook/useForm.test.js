const { renderHook, act, screen } = require("@testing-library/react")
const { useForm } = require("../../src/hooks/useForm")

describe('Pruebas en useForm', () => {

    const initialForm  = {
        name: 'Mauricio',
        email: 'llanosmauricio10@gmail.com',
    }

    test(' debe de regresar los valores por defecto ', () => {

        const {result} = renderHook( () => useForm( initialForm ) );
        expect(result.current).toEqual(
            {
                name: result.current.name,
                email: result.current.email,
                formState: initialForm,
                onImputChange: expect.any(Function),
                onResetform: expect.any (Function),
        });
    });

    test('debe de cambiar el nombre del formulario', () => {
        const newValue = 'Juan'
        const {result} = renderHook( () => useForm( initialForm ) );
        const {onImputChange} = result.current
        act( () => {
            onImputChange({ target: { name: 'name' , value: newValue} });
        } );

        expect( result.current.name ).toBe(newValue);
        expect( result.current.formState.name ).toBe(newValue);
    });

    test('debe de realizar el reset del formulario', () => {
        const newValue = 'Juan'
        const {result} = renderHook( () => useForm( initialForm ) );
        const {onImputChange, onResetform} = result.current
        act( () => {
            onImputChange({ target: { name: 'name' , value: newValue} });
            onResetform();
        } );

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name );
    });

})