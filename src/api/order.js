import { serverRoot, http } from './config'

export default {
    fetchAll() {
        return http.get(serverRoot + '/order/all')
    },
    fetchMy(userid) {
        return http.get(serverRoot + '/order/my/' + userid)
    },
    add(user, data) {
        return http.post(serverRoot + '/order/add', {
            user: user,
            books: data
        })
    },
    finish(id) {
        return http.get(serverRoot + '/order/finish/'+id)
    }
}