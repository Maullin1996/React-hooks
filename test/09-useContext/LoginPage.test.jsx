import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en <LoginPage />', () => {
    

    test('Debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        );
        //screen.debug();
            const preTag = screen.getByLabelText('pre');
            //console.log(preTag.innerHTML);
            expect(preTag.innerHTML).toBe('null');
    });

    test('Debe de llamar el setUser cuando se hace Click en el boton', () => {
        const setuserMock = jest.fn();
        render(
            <UserContext.Provider value={{user: null, setuser: setuserMock}}>
                <LoginPage 
                    />
            </UserContext.Provider>
        );
        
        const setButton = screen.getByRole("button");
        fireEvent.click(setButton);
        screen.debug(setButton);
        
        expect( setuserMock ).toHaveBeenCalled();
        expect( setuserMock ).toHaveBeenCalledWith({"email": "elmauro@gmail.com", "id": 123, "name": "Mauro"});
    });

});