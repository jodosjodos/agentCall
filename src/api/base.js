import axios from 'axios'
import { baseURL } from '../constants'

const apiBase = axios.create({
    baseURL: `${baseURL}`
})

export default apiBase
