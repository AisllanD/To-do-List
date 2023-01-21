
import {useState} from 'react';
import { Link } from 'react-router-dom'
import './register.css'



function Register(){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [idade, setIdade] = useState('')
    const [password, setPassword] = useState('')



    function handleRegister(e){
        e.preventDefault();
        
        if(email !== '' && password !== ''){
            alert("Teste")
        }else{
            alert('Preencha todos os campos!')
        }

    }

    return(
        <div className='login-container'>
            <h1>
                Cadastre sua conta. 
            </h1>    

            <form className='form' onSubmit={handleRegister}>
                
                <input 
                type="text"
                placeholder='Nome'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />
                
                <input 
                type="text" 
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <input 
                type="text"
                placeholder='idade'
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                />

                <input 
                autoComplete={false}
                type="password" 
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

            
                
                <button type="submit" >Sing Up</button>

            </form>

            <Link to="/" className='link'>Voltar para login</Link> 

        </div>
    )
}

export default Register;
