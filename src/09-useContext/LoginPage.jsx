import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    const { user, setuser } = useContext( UserContext );

    return (
    <>
    
        <h1>LoginPage</h1>
        <hr/>

        <pre>
            { JSON.stringify(user, null, 3) }
        </pre>

        <button 
            className="btn btn-primary"
            onClick={ () => setuser({id: 123, name: 'Mauro', email: 'elmauro@gmail.com' }) }
        >
            Set user
        </button>
    
    </>
    )
}