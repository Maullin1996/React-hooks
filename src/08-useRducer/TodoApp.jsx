import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState =[//{
    //     id: new Date().getTime()*3,
    //     description: 'Recoletar la piedra del alma',
    //     done:false,
    // },
    // {
    //     id: new Date().getTime()*2,
    //     description: 'Recoletar la piedra del tiempo',
    //     done:false,
    // },
];

const init = () => {
    let dataInLocal = localStorage.getItem('todos')
    return dataInLocal ? JSON.parse(dataInLocal) :  [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer( todoReducer, initialState, init );

    /*para grabar en el local storage se hace uso del
    useEffect, hay  que tener en consideracón de que en 
    el loca storage solo se graban strings mas no objetos
    la funcion para almacenar en el local estorage es: localStorage.setItem*/
    useEffect(() => {
        // para convertir los objetos a strings se ultiliza: JSON.stringify
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])
    

    const handleNewTodo =  ( todo ) => {
        const action = {
            type:'[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
        //dispatch es una funcion la cual es el encargado de enviar la acción
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }

    const handleToggleTodo = ( id ) => {
        //console.log({id});
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    }

    return (
    <>
        <h1>TodoApp 10, <small>Pendientes:2</small></h1>
        <hr/>

        <div className="row">
            <div  className="col-7">
                <TodoList 
                todos={ todos } 
                onDeleteTodo={ handleDeleteTodo } 
                onToggleTodo={ handleToggleTodo }
                />
            </div>

        <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            <TodoAdd onNewTodo={handleNewTodo} />
        </div>
    </div>


    </>

    )
}
