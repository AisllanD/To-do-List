import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';

import Login from '../pages/Login'
import Register from '../pages/Register';
import Home from '../pages/Home';

import { AuthProvider, AuthContext } from '../contexts/auth';


function RoutesApp() {


    
    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading){
            return <div className='loading'>Carregando...</div>
        }
        if(!authenticated){
            return < Navigate to="/" />
        }
        return children
    };

    return(
        <AuthProvider >
          
            <Routes> 
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/home' element={ <Private> <Home/> </Private>  }/> 
            </Routes>
        </AuthProvider >
    )
}

export default RoutesApp;