import * as axios from "axios";

const instance = axios.create({
    // Без withCredentials: true сервер нас считает анонимом
    withCredentials: true,
    // Теперь повторяющийся начальный кусок урла не нужно прописывать
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
    },
    getProfileData(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    },
    getMyData(id) {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }

}