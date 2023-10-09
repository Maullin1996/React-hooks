import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useRducer/todoReducer";

const initialState = [];
const init = () => {
    let dataInLocal = localStorage.getItem('todos')
    return dataInLocal ? JSON.parse(dataInLocal) :  [];
    }

export const useTodo = () =>{
    const [todos, dispatch] = useReducer( todoReducer, initialState, init)


    useEffect(() => {
        // para convertir los objetos a strings se ultiliza: JSON.stringify
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])

    const handleNewTodo = ( todo ) => {
        const action ={
            type:'[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    } 

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    }

    return{
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done).length, 

    }
}