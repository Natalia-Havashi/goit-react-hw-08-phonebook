import { ContainerNav, LinkNav, NavUl } from 'components/styled.styled';
import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
const Navigation = () => {
  const isLoggeIn = useSelector(selectIsLoggedIn);
  return (
    <ContainerNav>
      <LinkNav to="/">Home</LinkNav>

      <nav>
        {isLoggeIn && (
          <NavUl>
            <li>
              <LinkNav to="contacts">Contacts</LinkNav>
            </li>
          </NavUl>
        )}
      </nav>
    </ContainerNav>
  );
};

export default Navigation;
