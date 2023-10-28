import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en <HomePage />', () => {

    const user = {
        id:1,
        name: 'Mauricio'
    }

    test('Debe de mostrar el componente sin el usuario', () => {
        
        render( 
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        
        );
        //screen.debug();

        const preTag = screen.getByLabelText('pre');
        //console.log(preTag.innerHTML)
        expect( preTag.innerHTML ).toBe( 'null' );

    });

    test('Debe de mostrar el componente sin el usuario', () => {
        render( 
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        //console.log(preTag.innerHTML);
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( `${user.id}` );
        /*hay que cambiar el toContain( user.id ) ya que el test lo evalua 
        como un numero pero nosotros lo mandamos como un string
        por tanto se cambia a como esta o tambien se puede poner 
        user.id.tostring()*/
    });
});