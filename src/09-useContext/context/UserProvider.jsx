import { useState } from "react"
import { UserContext } from "./UserContext"

// const user ={
//     id: 123,
//     name: 'Mauricio Llanos',
//     email: 'llanosmauricio10@gmail.com',
// }

export const UserProvider = ({ children }) => {

    const [user, setuser] = useState();

    return (
        <UserContext.Provider value={{ user, setuser }}>
            {children }
        </UserContext.Provider>
    )
}
/*Usualmente los height alter components a aparte de las properties
que usualmente se mandan, tambien se reciben los hijos
que el componente va a tener (no es obligatorio)*/