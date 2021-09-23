
import { api } from "../api"
import {useQuery} from "react-query";


 const getImage = async ()=>{
        const { data } = await api.get("/photos?_start=5&_limit=4")
        return data
}

export const useListImagesQuery = ()=>{
    return useQuery('listImage', getImage)
}