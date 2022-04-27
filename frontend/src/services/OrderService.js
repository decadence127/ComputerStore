import axios from "axios";
import { ORDER_URL} from "../utils/apiRoutes";

class OrderService {
    getOrders() {
        return axios.get(ORDER_URL);
    }
    addOrder(commodity) {
        return axios.post(ORDER_URL, commodity);
    }
    getOrderById(id) {
        return axios.get(`${ORDER_URL}${id}`);
    }
    getOrderByUserId(userId) {
        return axios.get(`${ORDER_URL}account/${userId}`);
    }
    editOrder(commodity, id) {
        return axios.put(`${ORDER_URL}${id}`, commodity);
    }
    deleteOrder(id) {
        return axios.delete(`${ORDER_URL}${id}`);
    }
}

export default new OrderService();
