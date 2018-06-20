import axios from 'axios'
import { serverRoot } from './config'

export default {
    fetchAll() {
        return axios.get(serverRoot + '/order/all')
    },
    add(form) {
        return axios.post(serverRoot + '/order/add', form)
    },
}