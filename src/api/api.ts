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
    acceptFollow(userId: string) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    acceptUnFollow(userId: string) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    getStatus(userId: string) {
        return instance.get('profile/status/' + userId)
            .then(response => {
                return response.data;
            });
    },
    updateStatus(status: string) {
        return instance.put('profile/status/', {status: status})
            .then(response => {
                return response.data;
            });
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    }
}