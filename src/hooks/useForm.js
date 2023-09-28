import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState(initialForm);

    //const { username, email, password } = formState

    const onImputChange = ({target}) => {

        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });

    }

    const onResetform = () =>{

        setFormState(initialForm);
    }


    return {
        formState,
        onImputChange,
        onResetform,

    }
}
