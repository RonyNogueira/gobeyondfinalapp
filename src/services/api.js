import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/"

const api = axios.create({
    baseUrl:url,
})

export {api}