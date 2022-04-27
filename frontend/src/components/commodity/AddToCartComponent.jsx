import React, {useState, useEffect, useContext} from 'react';
import {useHistory} from "react-router-dom";
import {ADD_COMMODITY_ROUTE, EDIT_COMMODITY} from "../../utils/routeNames";
import CommodityService from "../../services/CommodityService";
import {Context} from "../../index";
import CartService from "../../services/CartService";


const ListCommoditiesComponent = () => {

    const history = useHistory();

    const {user} = useContext(Context) // Receiving user store from Context

    const [commodities, setCommodities] = useState([])

    const [chosenCommodities, setChosenCommodities] = useState([])

    useEffect(() => {
        CommodityService.getCommodities().then((res) => {
            console.log(res.data)
            setCommodities(res.data)
        }).catch(error => {
            console.log(error);
        })
        CartService.getCartByUserId(user.userData.id).then((res) => {
            console.log(res.data)
            user.setCart(res.data)
            setChosenCommodities(res.data.commodities)
        })

    }, [])


    const toCart = (commodity) => {
        if (chosenCommodities.find((p) => p.id === commodity.id)) {
            chosenCommodities.splice(chosenCommodities.find((p) => p.id === commodity.id), 1);
        } else {
            chosenCommodities.push(commodity);
        }
        let cart = {
            id: user.cart.id,
            commodities: chosenCommodities
        }
        CartService.editCart(cart, user.cart.id).then((res)=>{
            user.setCart(res.data)
            console.log(chosenCommodities)
        })

    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card-body">
                        <div>
                            {
                                commodities.map(
                                    commodity =>
                                        <div key={commodity.id}>
                                            Name: {commodity.name}
                                            <div>
                                                <button onClick={() => toCart(commodity)}
                                                        className="btn btn-danger">To cart
                                                </button>
                                            </div>
                                        </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default ListCommoditiesComponent;