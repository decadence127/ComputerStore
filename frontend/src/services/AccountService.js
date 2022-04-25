import axios from "axios";
import { SIGN_IN_URL, SIGN_UP_URL, USER_URL } from "../utils/apiRoutes";

class AccountService {
    signUp(user) {
        return axios.post(SIGN_UP_URL, user);
    }
    signIn(user) {
        return axios.post(SIGN_IN_URL, user);
    }
    getUsers() {
        return axios.get(USER_URL);
    }
    addUser(user) {
        return axios.post(USER_URL, user);
    }
    getUserById(userId) {
        return axios.get(`${USER_URL}${userId}`);
    }
    editUser(user, userId) {
        return axios.put(`${USER_URL}${userId}`, user);
    }
    deleteUser(userId) {
        return axios.delete(`${USER_URL}${userId}`);
    }
}

export default new AccountService();
