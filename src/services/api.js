import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/"

const api = axios.create({
    baseURL:url,
})

export { api }