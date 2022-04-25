import {observer} from "mobx-react-lite";
import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Context} from "../..";
import AccountService from "../../services/AccountService";
import {
    ADMIN_HOME_ROUTE,
    USER_HOME_ROUTE,
} from "../../utils/routeNames";
import SignInForm from "./SignInForm/SignInForm";

const SignInComponent = observer(() => {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const {user} = useContext(Context); // Receiving user store from Context
    const history = useNavigate();

    const changeHandler = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const formHandler = async (e) => {
        e.preventDefault(); // How do we assign an admin role then? I see that auth is quite simple.
        const {data} = await AccountService.signIn(userData);
        if (data) {
            user.setUserData(data); // Adding user data to user global store
            user.setIsAuth(true); // Setting isAuth flag to true
        }
        console.log("global user state => " + JSON.stringify(user));
        history.push(USER_HOME_ROUTE);
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Sign In</h3>
                        <div className="card-body">
                            <SignInForm
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

export default SignInComponent;
