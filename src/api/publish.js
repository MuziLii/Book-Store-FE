import axios from 'axios'
import { serverRoot } from './config'

export default {
    fetchAll() {
        return axios.get(serverRoot + '/publish/all')
    },
    add(name) {
        return axios.post(serverRoot + '/publish/add', {
            name: name
        })
    },
    delete(id) {
        return axios.post(serverRoot + '/publish/delete', {
            id: id
        })
    }
}