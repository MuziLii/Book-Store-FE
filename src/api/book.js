import { serverRoot, http } from './config'

export default {
    fetchAll() {
        return http.get(serverRoot + '/book/all')
    },
    add(form) {
        return http.post(serverRoot + '/book/add', form)
    }
}