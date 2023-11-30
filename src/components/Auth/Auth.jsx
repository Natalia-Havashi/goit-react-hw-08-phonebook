import { AuthWrapper } from 'components/styled.styled';
import { NavLink } from 'react-router-dom';

export const Auth = () => {
  return (
    <AuthWrapper>
      <ul>
        <li>
          <NavLink to="login">Log In</NavLink>
        </li>
        <li>
          <NavLink to="register">Sign Up</NavLink>
        </li>
      </ul>
    </AuthWrapper>
  );
};
