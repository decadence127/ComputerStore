import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {ADD_COMMODITY_ROUTE, ADD_ORDER_ROUTE, EDIT_COMMODITY, EDIT_ORDER} from "../../utils/routeNames";
import CommodityService from "../../services/CommodityService";
import OrderService from "../../services/OrderService";


const ListOrdersComponent = () => {

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


    const add = () => {
        history.push(ADD_ORDER_ROUTE);
    }

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
            {/*<div className="container">*/}
            {/*    <div className="row">*/}
            {/*        <button style={{marginTop: "10px"}}*/}
            {/*                onClick={() => add()}*/}
            {/*                className="btn btn-danger">Add*/}
            {/*        </button>*/}
            {/*        <div className="card-body">*/}
            {/*            <div >*/}
            {/*                {*/}
            {/*                    orders.map(*/}
            {/*                        order =>*/}
            {/*                            <div  key={order.id}>*/}
            {/*                                Condition: {order.condition}*/}

            {/*                                <div>*/}
            {/*                                    <button onClick={() => edit(commodity.id)}*/}
            {/*                                            className="btn btn-danger">Edit*/}
            {/*                                    </button>*/}
            {/*                                    <button style={{marginLeft: "10px"}}*/}
            {/*                                            onClick={() => deleteOrder(commodity.id)}*/}
            {/*                                            className="btn btn-danger">Delete*/}
            {/*                                    </button>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                    )*/}
            {/*                }*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );

}

export default ListOrdersComponent;