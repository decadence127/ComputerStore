import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {ADD_COMMODITY_ROUTE, EDIT_COMMODITY} from "../../utils/routeNames";
import CommodityService from "../../services/CommodityService";


const ListCommoditiesComponent = () => {

    const history = useHistory();

    const [commodities, setCommodities] = useState([])

    useEffect(() => {
        CommodityService.getCommodities().then((res) => {
            console.log(res.data)
            setCommodities(res.data)
        }).catch(error => {
            console.log(error);
        })
    }, [])


    const add = () => {
        history.push(ADD_COMMODITY_ROUTE);
    }

    const edit = (id) => {
        history.push(`${EDIT_COMMODITY}${id}`);
    }


    const deleteCommodity = (id) => {
        CommodityService.deleteCommodity(id).then(res => {
            setCommodities(commodities.filter(commodity => commodity.id !== id))
        })
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <button style={{marginTop: "10px"}}
                            onClick={() => add()}
                            className="btn btn-danger">Add
                    </button>
                    <div className="card-body">
                        <div >
                            {
                                commodities.map(
                                    commodity =>
                                        <div  key={commodity.id}>
                                            Name: {commodity.name}
                                            <div>
                                            <button onClick={() => edit(commodity.id)}
                                                    className="btn btn-danger">Edit
                                            </button>
                                            <button style={{marginLeft: "10px"}}
                                                    onClick={() => deleteCommodity(commodity.id)}
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

export default ListCommoditiesComponent;