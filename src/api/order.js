import { serverRoot, http } from './config'

export default {
    fetchAll() {
        return http.get(serverRoot + '/order/all')
    },
    add(user, data) {
        return http.post(serverRoot + '/order/add', {
            user: user,
            books: data
        })
    },
}