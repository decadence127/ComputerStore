import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountService from "../../services/AccountService";
import {HOME_ROUTE} from "../../utils/routeNames";
import SignUpForm from "./SignUpForm/SignUpForm";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

const SignUpComponent = observer(() => {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
    });
    const { user } = useContext(Context); // Receiving user store from Context
    const history = useNavigate();

    const changeHandler = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };
    const formHandler = async (e) => {
        e.preventDefault();
        let account = {
            username: userData.username,
            password: userData.password,
            accountData:{
                firstname: userData.firstname,
                lastname: userData.lastname,
                phone: userData.phone,
                email: userData.email
            }
        }

        const { data } = await AccountService.signUp(account);

        if (data) {
            user.setUserData(data); // Adding user data to user global store
            user.setIsAuth(true); // Setting isAuth flag to true
            history.push(HOME_ROUTE);
            console.log("global user state => " + JSON.stringify(user));
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Sign Up</h3>
                        <div className="card-body">
                            <SignUpForm
                                userData={userData}
                                changeHandler={changeHandler}
                                formHandler={formHandler}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default SignUpComponent;
