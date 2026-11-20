import axios from 'axios'

const Api = axios.create({
    baseURL: 'http://192.168.0.6:5000'
})

export default Api