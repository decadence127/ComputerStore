import React from "react";

const CustomFormInput = ({ label, type, userData, name, changeHandler, required }) => {
    return (
        <div className="form-group">
            <label> {label} </label>
            <input placeholder={label} type={type} name={name} className="form-control"
                   value={userData[name]}
                   onChange={changeHandler} required={required} />
        </div>
    );

}
export default CustomFormInput;