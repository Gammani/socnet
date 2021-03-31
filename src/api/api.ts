import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d53ad02d-1ee2-4ffc-9e75-df6b59b01ee8"
    }
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(id: string) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    unFollow(id: string) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    auth(){
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    }
}