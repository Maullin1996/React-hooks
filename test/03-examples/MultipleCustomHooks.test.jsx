import { getByText, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-Examples/MultipleCustomHooks"
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');

describe('Puebas en <MultipleCustomHooks />', () => {
    
    test('Debe de mostrar el componentes por defecto', () => {

        useFetch.mockReturnValue({
            data: null, 
            isLoading: true, 
            hasError: null

        });

        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Loading....') );
        expect( screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole('button',{ name: 'Next pokemon' });

        expect( nextButton.disabled ).toBeTruthy();

    });

    test('Debe de mostrar un Pokemon', () => {

        useFetch.mockReturnValue({
            data: [{name: 'Mauricio', episode: '554'}], 
            isLoading: false, 
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        //screen.debug();
    });
    
});