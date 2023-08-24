import { Link } from "react-router-dom"
const Navigation = () => {
    return (<>
    <nav>
        <ul>
            <li>
                <Link to='/register'>Sign Up</Link>
            </li>
            <li>
                <Link to='/signUp'>Log In</Link>
            </li>
        
        </ul>
    </nav>
    </>)
}

export default Navigation;