import axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "10d7a0fa-47f4-4f19-95cd-d17a76e8eb74"
	}
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data;
			});
	},
	follow(userId: number) {
		return instance.post(`follow/${userId}`)
	},
	unfollow(userId: number) {
		return instance.delete(`follow/${userId}`)
	},
	setUserProfile(userId: number) {
		return instance.get(`profile/${userId}`)
	},
	getProfile(userId: number) {
		console.warn('you use old api method! change it!')
		return profileAPI.getProfile(userId);
	}
}


type meResponseType = {
	data: { id: number, email: string, login: string }
	resultCode: number
	messages: Array<string>
}

export const authAPI = {
	me() {
		return instance.get<meResponseType>(`auth/me`).then(res => res.data);
	},
	login(email: string, password: string, rememberMe = false) {
		return instance.post(`auth/login`, { email, password, rememberMe });
	},
	logout() {
		return instance.delete(`auth/login`);
	}
}

export const profileAPI = {
	getProfile(userId: number) {
		return instance.get(`profile/${userId}`);
	},
	getStatus(userId: number) {
		return instance.get(`profile/status/${userId}`);
	},
	updateStatus(status: string) {
		return instance.put(`profile/status`, { status: status });
	}
}
