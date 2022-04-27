import CustomFormInput from "../common/CustomFormInput/CustomFormInput";
import {COMMODITIES_ROUTE} from "../../utils/routeNames";
import {useHistory} from "react-router-dom";


const CommodityForm = ({commodity, changeHandler, formHandler, title}) => {

    const history = useHistory();

    const cancel = () => {
        history.push(COMMODITIES_ROUTE);
    }

    return (
        <div>
            <h3>{title}</h3>
            <form onSubmit={formHandler}>
                <CustomFormInput label="Наименование" name="name" userData={commodity} changeHandler={changeHandler}/>
                <CustomFormInput label="Стоимость" name="price" userData={commodity} changeHandler={changeHandler}/>
                <CustomFormInput label="Количество" name="quantity" userData={commodity} changeHandler={changeHandler}/>
                <CustomFormInput label="Описание" name="description" userData={commodity}
                                 changeHandler={changeHandler}/>
                <div style={{marginTop: 7, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <button type="submit" style={{width: "50%"}} className="btn btn--success">Добавить</button>
                    <button onClick={cancel} style={{width: "50%"}} className="btn btn-success">Отмена</button>
                </div>
            </form>
        < /div>
    )
}
export default CommodityForm;