import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

    const {description, onImputChange, onResetform} = useForm({
        description:''
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if ( description.length <= 1 ) return;

        const newTodo ={
            id: new Date().getTime(),
            done: false,
            description: description,
        }
        onNewTodo && onNewTodo(newTodo);
        onResetform();
    }

    return (
        <form onSubmit={ onFormSubmit }>
            <input 
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={ description }
                onChange={ onImputChange }
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            > 
            Agregar </button>
        </form>
    )
}
