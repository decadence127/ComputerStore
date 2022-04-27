import React, {useState, useEffect} from 'react';
import AccountService from "../../services/AccountService";
import {useHistory} from "react-router-dom";
import CustomModal from "../common/CustomModal";
import EditRoleForm from "./EditRoleForm";


const ListAccountsComponent = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = async (user) => {
        setShow(true);
        console.log(user.id)
        setData({
            id: user.id,
            username: user.username
        })
    }

    const [data, setData] = useState({
        id: "",
        username: "",
        role: ""
    })

    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = () => {
        AccountService.getUsers().then((res) => {
            setUsers(res.data)
        }).catch(error => {
            console.log(error);
        })
    }

    const edit = (e) => {
        e.preventDefault();
        AccountService.editRole(data, data.id).then(res => {
            getAllUsers()
            setShow(false)
        })
    }

    const changeHandler = (e) => {
        setData({
            id: data.id,
            username: data.username,
            role: e.target.value});
    };

    const form = (
        <>
           <EditRoleForm formHandler={(e) => edit(e)} changeHandler={changeHandler} userData={data}/>
        </>
    )

    return (
        <div>
            <div className="container">
                <div className="row">
                    <CustomModal handleClose={handleClose} show={show} title="Edit role" children={form}/>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th> Username</th>
                            <th> Firstname</th>
                            <th> Lastname</th>
                            <th> Phone</th>
                            <th> Email</th>
                            <th> Role</th>
                            <th> Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            users.map(
                                user =>
                                    <tr key={user.id}>
                                        <td>{user.username}</td>
                                        <td>{user.accountData.firstname}</td>
                                        <td>{user.accountData.lastname}</td>
                                        <td>{user.accountData.phone}</td>
                                        <td>{user.accountData.email}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <button style={{marginLeft: "10px"}} onClick={() => handleShow(user)}
                                                    className="btn btn-danger">Edit
                                            </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}

export default ListAccountsComponent;