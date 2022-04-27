import {Context} from "../../index";
import React, {useContext, useEffect, useState} from "react";
import SignInComponent from "../SignInComponent/SignInComponent";
import {Form, Button, Modal} from "react-bootstrap";
import AccountService from "../../services/AccountService";
import {useHistory} from "react-router-dom";
import {CART_ROUTE, HOME_ROUTE} from "../../utils/routeNames";
import SignUpForm from "../SignUpComponent/SignUpForm/SignUpForm";
import CartService from "../../services/CartService";


const ViewCartComponent = () => {

    const {user} = useContext(Context) // Receiving user store from Context
    const history = useHistory();


    const [cart, setCart] = useState({
        commodities: []
    });

    useEffect(() => {
        CartService.getCartByUserId(user.userData.id).then((res) => {
            console.log(res.data)
            setCart({
                commodities: res.data.commodities
            })
        }).catch(error => {
            console.log(error);
        })
    }, [])


    const update = (e) => {
        e.preventDefault();
        CartService.editCart(cart, user.userData.id).then(res => {
            alert('Updated');
            history.push(CART_ROUTE);
        });
    }

    return (
        <div>
            <div className="container">
                {
                    cart.commodities.map(commodity=>
                        <div key={commodity.id} className="row">
                            Name: {commodity.name}
                            Price: {commodity.price}
                        </div>

                    )
                }
            </div>
        </div>
    )

}

export default ViewCartComponent;