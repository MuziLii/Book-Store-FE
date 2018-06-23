import { serverRoot, http } from './config'

export default {
    fetchAll() {
        return http.get(serverRoot + '/publish/all')
    },
    add(name) {
        return http.post(serverRoot + '/publish/add', {
            name: name
        })
    },
    delete(id) {
        return http.post(serverRoot + '/publish/delete', {
            id: id
        })
    }
}