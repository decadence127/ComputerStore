import React, {Button, Form} from "react-bootstrap";

const EditRoleForm = ({formHandler, userData, changeHandler}) => {

    const roles = [
        {value: "ADMIN", label: "ADMIN"},
        {value: "USER", label: "USER"}];

    return ( <Form onSubmit={formHandler}>
        <Form.Label>Username</Form.Label>
        <Form.Control
            value={userData.username}
            name="username"
            disabled
            type="text"/>
        <Form.Label>Role</Form.Label>
        <Form.Control as="select" onChange={changeHandler} name="role">
            <option >Open this select menu</option>
            {
                roles.map(r => (
                    <option key={r.value} value={r.value}> {r.label}</option>
                ))
            }
        </Form.Control>
        <Button type="submit">Edit</Button>
    </Form>)
}
export default EditRoleForm;