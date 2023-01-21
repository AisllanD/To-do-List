import {useState, useContext} from 'react';
import { Link } from 'react-router-dom'

import './login.css'

import { AuthContext } from '../../contexts/auth';

function Login(){

    const {  login} = useContext(AuthContext);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function handlelogin(e){
        e.preventDefault();
        if(email !== '' && password !== ''){
            login(email, password)
        }else{

            alert("Preencha todos os campos")
        }
       
    }

    return(
        <div className='login-container'>
            <h1>
                Bem-vindo(a)!  
            </h1>    

           

            <form className='form' onSubmit={handlelogin}>
                <input 
                type="text" 
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <input 
                autoComplete={false}
                type="password" 
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <p> Esqueceu sua senha?</p>
                
                <button type="submit" >login</button>

            </form>

            <span> Não tem uma conta? <Link to="/register" className='link'>Cadastre-se</Link> </span> 

        </div>
    )
}

export default Login;
