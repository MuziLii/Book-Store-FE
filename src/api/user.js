import { serverRoot, http } from './config'

export default {
    auth(form) {
        return http.post(serverRoot + '/user/auth', form)
    },
    fetchAll() {
        return http.get(serverRoot + '/user/all')
    },
    register(form) {
        return http.post(serverRoot + '/user/register', {
            username: form.username,
            password: form.pass,
            nickname: form.nickname
        })
    },
}