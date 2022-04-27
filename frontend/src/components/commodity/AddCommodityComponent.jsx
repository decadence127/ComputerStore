import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {COMMODITIES_ROUTE, USERS_ROUTE} from "../../utils/routeNames";
import CommodityService from "../../services/CommodityService";
import CommodityForm from "./CommodityForm";


const AddCommodityComponent = () => {

    const history = useHistory();

    const [commodity, setCommodity] = useState({
        id: "",
        name: "",
        price: "",
        quantity: "",
        description: ""
    })

    const addCommodity = (e) => {
        e.preventDefault();
        CommodityService.addCommodity(commodity).then(res => {
            history.push(COMMODITIES_ROUTE);
        });
    }

    const changeHandler = (e) => {
        setCommodity({
            ...commodity,
            [e.target.name]: e.target.value,
        })
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <CommodityForm commodity={commodity} changeHandler={changeHandler} formHandler={addCommodity} title="Add Commodity"/>
                </div>
            </div>
        </div>
    );

}

export default AddCommodityComponent;