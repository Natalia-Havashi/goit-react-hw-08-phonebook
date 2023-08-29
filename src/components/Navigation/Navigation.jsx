
import { useSelector } from "react-redux";
import {NavLink } from "react-router-dom"
import { selectIsLoggedIn } from "redux/auth/selectors";
const Navigation = () => {
    const isLoggeIn = useSelector(selectIsLoggedIn)
    return (<>
    <NavLink to='/'>Home</NavLink>
            
<nav>
    {isLoggeIn && (<ul>
        <li>
            <NavLink to='contacts'>Contacts</NavLink>
        </li>
    </ul>)}
    
    
</nav>
                
            
        
       
    
    </>)
}

export default Navigation;