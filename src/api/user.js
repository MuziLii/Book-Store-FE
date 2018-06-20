import axios from 'axios'
import { serverRoot } from './config'

export default {
    auth(form) {
        return axios.post(serverRoot + '/user/auth', form)
    },
    fetchAll() {
        return axios.get(serverRoot + '/user/all')
    },
    register(form) {
        return axios.post(serverRoot + '/user/register', {
            username: form.username,
            password: form.pass,
            nickname: form.nickname
        })
    },
}