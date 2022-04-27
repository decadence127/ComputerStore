import React, { useCallback,useContext } from 'react';
import { Context } from '../..';
import { Link } from 'react-router-dom';
import { userButtons, unAuthButtons, vetButtons, adminButtons } from '../../utils/headerButtons';
import {HOME_ROUTE, USER_HOME_ROUTE} from '../../utils/routeNames';
import HeaderButton from './headerButton/HeaderButton';
import { observer } from 'mobx-react-lite';


const HeaderComponent = observer(() => {
    const { user } = useContext(Context) // Receiving user store from Context

    const roleBasedHeader = useCallback(() => {
        if (user.isAuth) {
            if (user.userData.role === "ADMIN") {
                return adminButtons
            } else if (user.userData.role === "USER") {
                return userButtons
            }
        } else {
            return unAuthButtons
        }
    }, [user])

    const buttons = roleBasedHeader();

    return (
        <div>
            <header>
                <div className="px-3 py-2 bg-dark bg-opacity-50 text-white">
                    <div className="container">
                        <div
                            className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <Link to={HOME_ROUTE}
                                className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                            </Link>

                            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                {buttons.map(({ path, name, action }) => (<li key={path}><HeaderButton action={action} to={path} children={name} /></li>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
})

export default HeaderComponent;