import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useRducer/TodoItem";

describe('Pruebas en <TodoItem />', () => {

    const todo ={
        id: 1,
        description: 'Piedra del Alma',
        done: false
    }
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    /*beforeEach( () => jest.clearAllMocks ) lo que hace es limpiar las funciones
    ya que si se van a repetir en las pruebas lo mejor es dejar limpias las funciones */
    beforeEach( () => jest.clearAllMocks );

    test('Debe de mostrar el Todo Pendiente de completar', () => {
        render( <TodoItem 
                    todo={ todo } 
                    onToggleTodo={ onToggleTodoMock }
                    onDeleteTodo={ onDeleteTodoMock } 
                    /> 
                    );
        const liElement = screen.getByRole('listitem');
        //screen.debug();
        expect( liElement.className).toBe('list-group-item d-flex justify-content-between');
        /*Para poder encontrar la clase span hay que poner un aria-laber
        en el elemento ya que si no muestra error */
        const spanElement = screen.getByLabelText('span');
        //para ver que contiene el elemento.
        //console.log( spanElement.className );
        expect(spanElement.className).toContain('align-self-center')

    });

    test('Debe de mostrar el Todo completado', () => {
        
        todo.done = true;
        
        render( <TodoItem 
                    todo={ todo } 
                    onToggleTodo={ onToggleTodoMock }
                    onDeleteTodo={ onDeleteTodoMock } 
                    /> 
                    );

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through')
    });

    test('Span debe de llamar el ToggleTodo cuando se hace click', () => {
        render( <TodoItem 
            todo={ todo } 
            onToggleTodo={ onToggleTodoMock }
            onDeleteTodo={ onDeleteTodoMock } 
            /> 
            );
        
        const spanElement = screen.getByLabelText('span');
        /*Para simular el click */
        fireEvent.click( spanElement );
        
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );

    });
    
    test('button debe de llamar el deleteTodo', () => {
        render( <TodoItem 
            todo={ todo } 
            onToggleTodo={ onToggleTodoMock }
            onDeleteTodo={ onDeleteTodoMock } 
            /> 
            );
        
        const DeleteButton = screen.getByText('Borra');
        /*Para simular el click */
        screen.debug(DeleteButton);
        fireEvent.click( DeleteButton );
        
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
        
    });


});