import axios from "axios";

export const api  = axios.create({
    baseURL: 'https://api-nodejs-todolist.herokuapp.com'
});

export const api_login = async (email, password) => {
    return api.post("/user/login", email, password);
}

