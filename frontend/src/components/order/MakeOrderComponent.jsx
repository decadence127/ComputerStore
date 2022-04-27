import {Context} from "../../index";
import React, {useContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {ADD_ORDER_ROUTE, CART_ROUTE} from "../../utils/routeNames";
import CartService from "../../services/CartService";


const ViewCartComponent = () => {

    const {user} = useContext(Context) // Receiving user store from Context
    const history = useHistory();


    // const [cart, setCart] = useState({
    //     commodities: []
    // });

    const [chosenCommodities, setChosenCommodities] = useState([])

    useEffect(() => {
        CartService.getCartByUserId(user.userData.id).then((res) => {
            console.log(res.data)
            user.setCart(res.data)
            setChosenCommodities(res.data.commodities)
            // setCart({
            //     commodities: res.data.commodities
            // })
        }).catch(error => {
            console.log(error);
        })
    }, [])


    // const update = (e) => {
    //     e.preventDefault();
    //     CartService.editCart(cart, user.userData.id).then(res => {
    //         alert('Updated');
    //         history.push(CART_ROUTE);
    //     });
    // }

    const deleteCommodityFromCart = (commodity) => {
        if (chosenCommodities.find((p) => p.id === commodity.id)) {
            chosenCommodities.splice(chosenCommodities.find((p) => p.id === commodity.id), 1);
        } else {
            chosenCommodities.push(commodity);
        }
        let cart = {
            id: user.cart.id,
            commodities: chosenCommodities
        }
        CartService.editCart(cart, user.cart.id).then((res) => {
            user.setCart(res.data)
            history.push(CART_ROUTE);
        })

    }

    const toOrder = () => {
        history.push(ADD_ORDER_ROUTE);
    }

    return (
        <div>
            <div className="container">
                <button style={{marginTop: "10px"}}
                        onClick={() => toOrder()}
                        className="btn btn-danger">To order
                </button>
                {
                    user.cart.commodities.map(commodity =>
                        <div key={commodity.id} className="row">
                            Name: {commodity.name}
                            Price: {commodity.price}
                            <div>
                                <button onClick={() => deleteCommodityFromCart(commodity)}
                                        className="btn btn-danger">Delete
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )

}

export default ViewCartComponent;