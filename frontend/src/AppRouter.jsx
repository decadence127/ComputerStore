import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Context } from ".";
import { adminPagesArray, userPagesArray } from "./utils/constats/pageArray";
import { HOME_ROUTE, SIGN_IN_ROUTE } from "./utils/routeNames";


const AppRouter = observer(() => {

  const { user } = useContext(Context);

  return (
    <Switch>
      {userPagesArray.map((page) => (<Route key={page.path} exact path={page.path} component={page.component} />))}
      {user.userData.role !== '' && user.userData.role === "ADMIN" && adminPagesArray.map(({ component, path }) => (<Route key={path} exact path={path} component={component} />))}
      {user.isAuth === true ? <Redirect to={HOME_ROUTE} /> : <Redirect to={SIGN_IN_ROUTE} />}
    </Switch>)
})
export default AppRouter;
