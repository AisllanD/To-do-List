import React, {createContext} from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//import {api, api_login} from "../Services/api";

export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    
    const navigate = useNavigate();
    const [user, setUser] = useState(null); 
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');
        
        if(recoveredUser){
            setUser(JSON.parse(recoveredUser))
        };
        setloading(false);

    }, []);

    const login = (email, password) =>{
        console.log("login", {email, password});

        const loggedUser = {
            id: "123", email,
        };

        localStorage.setItem("user", JSON.stringify(loggedUser))

        if(password === "123456" & email === "@teste"){
            setUser(loggedUser)
            navigate("/home");
        }

        //const loggedUser = response.data.user;
        //const token = response.data.token;

        //localStorage.setItem("user", JSON.stringify(loggedUser));
        //localStorage.setItem("token", token);

       // api.defaults.headers.Authorization = `Bearer ${token}`

        
        //setUser(loggedUser);
    };

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        //localStorage.removeItem("token");
        //api.defaults.headers.Authorization = null;
        setUser(null);
        navigate("/")
    };

    return (
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}