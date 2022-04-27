import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Context } from "../../..";

const HeaderButton = observer(({ action, icon, to, children }) => {

  const { user } = useContext(Context)
  const history = useHistory()

  const actionHandler = (e) => { // Important! we check if this button has a custom action and if so, we execute it.
    e.preventDefault();
    if (action) {
      if (action === "LOGOUT") {
        user.setIsAuth(false);
        user.setUserData({})
      }
    }
    history.push(to)
  }

  return (<Link to={to} onClick={actionHandler} className="nav-link text-white">
    {children}
  </Link>)

})
export default HeaderButton