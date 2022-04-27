import React, {useContext, useState, useEffect} from 'react';
import {Context} from "../index";
import {Form, Button, Modal} from "react-bootstrap";

import {useHistory} from "react-router-dom";
import SignInComponent from "./SignInComponent/SignInComponent";
import AccountService from "../services/AccountService";
import {HOME_ROUTE} from "../utils/routeNames";
import SignUpForm from "./SignUpComponent/SignUpForm/SignUpForm";
import CustomModal from "./common/CustomModal";

// import {Map, GoogleApiWrapper} from 'google-maps-react'

const HomeComponent = () => {

    const {user} = useContext(Context) // Receiving user store from Context
    const role = user.userData.role
    const [show, setShow] = useState(false);
    const history = useHistory();


    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true);
    }
    const [userData, setUserData] = useState({
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        phone: "",
        email: ""

    });

    useEffect(() => {
        AccountService.getUserById(user.userData.id).then((res) => {
            setUserData({
                username: res.data.username,
                password: res.data.password,
                firstname: res.data.accountData.firstname,
                lastname: res.data.accountData.lastname,
                phone: res.data.accountData.phone,
                email: res.data.accountData.email
            })
        }).catch(error => {
            console.log(error);
        })
    }, [])

    const changeHandler = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const update = (e) => {
        e.preventDefault();
        let acc = {
            username: userData.username,
            password: userData.password,
            accountData: {
                firstname: userData.firstname,
                lastname: userData.lastname,
                phone: userData.phone,
                email: userData.email,
            }
        };
        AccountService.editUser(acc, user.userData.id).then(res => {
            alert('Updated');
            history.push(HOME_ROUTE);
        });
    }

    const form = (
        <>
            <SignUpForm
                userData={userData}
                changeHandler={changeHandler}
                formHandler={update}
            />
        </>
    )
    if (role === "ADMIN" || role === "USER") {
        return (
            <div>
                <CustomModal handleClose={handleClose} show={show} title="Edit account" children={form}/>
                <h1>{role} page</h1>
                <button onClick={handleShow} type="button" className="btn btn-dark" style={{margin: "3.5%"}}>Edit
                </button>
            </div>
        )
    } else {
        return (
            <div>
                <SignInComponent/>
            </div>
        )
    }


}

export default HomeComponent;