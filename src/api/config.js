import axios from 'axios'

const serverRoot = 'http://127.0.0.1:8008'

let http = axios.create()
http.interceptors.request.use(config => {
    if (sessionStorage.$token) {
        config.headers = {'Authorization': sessionStorage.$token}
    }
    return config
}, err => {
    return Promise.reject(error)
})

export {serverRoot, http}