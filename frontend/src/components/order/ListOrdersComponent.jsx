import React, {useState, useEffect, useContext} from 'react';
import {useHistory} from "react-router-dom";
import { ADD_ORDER_ROUTE, EDIT_ORDER} from "../../utils/routeNames";
import OrderService from "../../services/OrderService";
import {Context} from "../../index";


const ListOrdersComponent = () => {

    const {user} = useContext(Context) // Receiving user store from Context

    const history = useHistory();

    const [orders, setOrders] = useState([])

    useEffect(() => {
        OrderService.getOrders().then((res) => {
            console.log(res.data)
            setOrders(res.data)
        }).catch(error => {
            console.log(error);
        })
    }, [])




    const edit = (id) => {
        history.push(`${EDIT_ORDER}${id}`);
    }


    const deleteOrder = (id) => {
        OrderService.deleteOrder(id).then(res => {
            setOrders(orders.filter(order => order.id !== id))
        })
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card-body">
                        <div >
                            {
                                orders.map(
                                    order =>
                                        <div  key={order.id}>
                                            Condition: {order.condition}

                                            <div>
                                                <button onClick={() => edit(order.id)}
                                                        className="btn btn-danger">Edit
                                                </button>
                                                <button style={{marginLeft: "10px"}}
                                                        onClick={() => deleteOrder(order.id)}
                                                        className="btn btn-danger">Delete
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

export default ListOrdersComponent;