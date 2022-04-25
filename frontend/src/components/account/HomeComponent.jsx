import {Context} from "../../index";
import {useContext} from "react";
import SignInComponent from "../SignInComponent/SignInComponent";

const HomeComponent = () => {

    const {user} = useContext(Context) // Receiving user store from Context
    const role = user.userData.role

    if (role === "ADMIN") {
        return (
          <h1>Admin Page</h1>
        );
    } else if (role === "USER") {
        return (
            <h1>User Page</h1>
        );
    } else {
        return (
            <div>
                <SignInComponent/>
            </div>
        )
    }


}

export default HomeComponent;