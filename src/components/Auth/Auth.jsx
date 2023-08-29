import { NavLink } from "react-router-dom"

export const Auth = () => {
    return (
        <nav>
             <ul>
        <li>
            <NavLink to='login'>Log In</NavLink>
        </li>
        <li>
            <NavLink to='register'>Sign Up</NavLink>
        </li>
       </ul>
        </nav>
      
    )
}