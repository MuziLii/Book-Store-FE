import { serverRoot, http } from './config'

export default {
    fetchAll() {
        return http.get(serverRoot + '/book/all')
    },
    add(form) {
        return http.post(serverRoot + '/book/add', form)
    },
    update(form) {
        return http.post(serverRoot + '/book/update', form)
    },
    delete(id) {
        return http.get(serverRoot + '/book/delete/' + id)
    }
}