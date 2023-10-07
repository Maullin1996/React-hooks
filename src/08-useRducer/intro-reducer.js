
const initialState=[{
    id:1,
    todo:'Recolectar la piedra del Alma',
    done: false,
}];

const todoReducer = ( state = initialState, action = {}) =>{

    if(action.type == '[TODO] add todo'){
        return[...state, action.payload];
    }
// el reducer siempre debe de devolver un estado
    return state;
}

let todos = todoReducer()

const newTodo={
    id:2,
    todo:'Recolectar la piedra del Alma',
    done: false,
}

const addTodoAction={
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction);


console.log({state: todos})

// para modificar el todo lo mejor ess mandar una action
// y esta accion le dija a la función cómo modificarse

// en react si le hacemos una mutación al arreglo este no va a redibujar nada

// action es el que le dice al reducer como quiero que cambie
// mi estado