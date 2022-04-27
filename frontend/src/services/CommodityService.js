import axios from "axios";
import {COMMODITIES_URL} from "../utils/apiRoutes";

class CommodityService {
    getCommodities() {
        return axios.get(COMMODITIES_URL);
    }
    addCommodity(commodity) {
        return axios.post(COMMODITIES_URL, commodity);
    }
    getCommodityById(id) {
        return axios.get(`${COMMODITIES_URL}${id}`);
    }
    editCommodity(commodity, id) {
        return axios.put(`${COMMODITIES_URL}${id}`, commodity);
    }
    deleteCommodity(id) {
        return axios.delete(`${COMMODITIES_URL}${id}`);
    }
}

export default new CommodityService();
