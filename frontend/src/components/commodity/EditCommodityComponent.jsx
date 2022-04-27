import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {COMMODITIES_ROUTE, USERS_ROUTE} from "../../utils/routeNames";
import CommodityService from "../../services/CommodityService";
import CommodityForm from "./CommodityForm";


const AddCommodityComponent = () => {

    const history = useHistory();

    const {id} = useParams();

    useEffect(() => {
        CommodityService.getCommodityById(id).then((res) => {
            setCommodity(res.data)
        })
    }, [])

    const [commodity, setCommodity] = useState({
        id: "",
        name: "",
        price: "",
        quantity: "",
        description: ""
    })

    const editCommodity = (e) => {
        e.preventDefault();
        CommodityService.editCommodity(commodity, id).then(res => {
            history.push(COMMODITIES_ROUTE);
        })
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
                    <CommodityForm commodity={commodity} changeHandler={changeHandler} formHandler={editCommodity} title="Edit Commodity"/>
                </div>
            </div>
        </div>
    );

}

export default AddCommodityComponent;