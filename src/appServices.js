import axios from "axios"
import { URL } from './enviorenment/enviorenment'


const getAll = ()=>{
    return axios.get(`${URL}/persons`)
        .then( response=>response.data)  
}
const Services = {
    getAll: getAll
}

export default Services