import { Navigate, Route, Routes, Link } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import {HomePage} from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';

export const MainApp = () => {
  return (
    <UserProvider>
    {/* <h1>MainApp</h1> */}
    <Navbar/>
    <hr/>

    <Routes>
      <Route path="/" element={ <HomePage /> }/>
      <Route path="login" element={ <LoginPage /> }/>
      <Route path="about" element={ <AboutPage /> }/>

      {/* <Route path="/*" element={ <LoginPage/> }/> */}
      <Route path="/*" element={ <Navigate to="/about" /> } />

    </Routes>
  
    </UserProvider>
  )
}
// Routes es un height alter component el cual va a recibir los componentes 
// hijos los cuales son un arreglo de rutas.
// si la ruta no existe me lleva al login page       <Route path="/*" element={ <LoginPage/> }/>
//Segunda metodología y  más recomendada por si la pagina no existe.
// <Route path="/*" element={ <Navigate to="/about" /> } />