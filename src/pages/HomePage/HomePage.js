import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <div>
        <p>This is your contact book. 
            To add a contact 
            Register or login</p>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/register">Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/signUp">Log In</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;
