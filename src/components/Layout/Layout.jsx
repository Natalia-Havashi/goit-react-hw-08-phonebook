
import { Auth } from "components/Auth/Auth";
import Navigation from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom"
import { selectIsLoggedIn } from "redux/auth/selectors";

export const Layout = () => {
   const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <>
        <header>
           <Navigation /> 
           {isLoggedIn ?  <UserMenu /> : <Auth />}
          
        </header>
        <main>
            <Outlet />
        </main>
        </>
    )
}
