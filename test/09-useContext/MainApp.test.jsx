import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";

describe('Pruebas en <MainApp />', () => {

    test('Debe de mostrar el HomePage', () => {

        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );
        
        expect( screen.getByText('HomePage') ).toBeTruthy();
        //screen.debug();

    });
    test('Debe de mostrar el LoginPage', () => {

        /*Para poder encontrar el LoginPage hay que utilizar el initialEntries={} */

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );
        
        expect( screen.getByText('LoginPage') ).toBeTruthy();
        screen.debug();



    });
});
/*Mirar clase 179 acerca del BrowserRouter en el main
este no se puede utilizar ya que estamos en la consola local
mas no en el navegador, por lo que hay que buscar una forma de 
simular el BrowserRouter
*/
/* MemoryRouter simula el BrowserRouter */
/* El MemoryRouter proporciona el useref, el uselocation etc */