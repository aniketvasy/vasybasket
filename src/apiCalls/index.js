import axios from "axios";
const api = axios.create({
    baseURL : "https://gorest.co.in/public/v2"
})

const loginUser = () =>{
    const {data} = api.post('/users')
}