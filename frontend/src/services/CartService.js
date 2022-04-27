import axios from "axios";
import {CART_URL, USER_URL} from "../utils/apiRoutes";

class CartService {
    getCartById(id) {
        return axios.get(`${CART_URL}${id}`);
    }
    getCartByUserId(userId) {
        return axios.get(`${CART_URL}user/${userId}`);
    }
    editCart(cart, userId) {
        return axios.put(`${CART_URL}${userId}`, cart);
    }
}

export default new CartService();
