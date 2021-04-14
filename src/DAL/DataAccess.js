import * as axios from "axios";

const instance = axios.create({
    // Без withCredentials: true сервер нас считает анонимом
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "893bceee-8d1d-4fea-8be4-69531f1b74a9"}
})

export const UsersDA = {
    getUsers(page, count) {
        // count: page size (how many items will be returned in response)
        // page: number of portion of items
        return instance.get(`users?page=${page}&count=${count}`)
            .then(response => response.data)
    },
    deleteContact(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    addContact(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    }
}

export const ProfileDA = {
    getProfileStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateProfileStatus(status) {
        return instance.put(`profile/status`, {status: status}) // {status: status} -> {status} | check if it could work
            .then(response => response.data)
    },
    getProfileData(id) {
        return instance.get(`profile/${id}`)
            .then(response => {
                console.log('getProfileData: ',response.data);
                return response.data})
    },
    getMyData() {
        // Am I authorized. Returns email, id, login if authorized.
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    getCaptcha() {
        // Gets captcha url
        return instance.get(`security/get-captcha-url`)
            .then(response => response.data)
    },
    logout() {
        // Send logout request
        return instance.delete(`auth/login`)
            .then(response => response.data)
    },
    sendAuthRequest(email, password, remember_me) {
        // Send auth request
        return instance.post(`auth/login`, {email, password, rememberMe: remember_me})
            .then(response => response.data)
    }

}