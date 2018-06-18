import axios from 'axios'
import { serverRoot } from './config'

export default {
    fetchAll() {
        return axios.get(serverRoot + '/book/all')
    },
    add(form) {
        return axios.post(serverRoot + '/book/add', form)
    },
}