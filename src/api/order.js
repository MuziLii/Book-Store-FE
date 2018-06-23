import { serverRoot, http } from './config'

export default {
    fetchAll() {
        return http.get(serverRoot + '/order/all')
    },
    add(form) {
        return http.post(serverRoot + '/order/add', form)
    },
}