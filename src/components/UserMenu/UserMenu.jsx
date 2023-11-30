import { UserWrapper } from 'components/styled.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/auth/auth-operetons';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <UserWrapper>
      <div>
        <p>WELCOME {user.name}!</p>
      </div>

      <button type="button" onClick={() => dispatch(logOutThunk())}>
        Logout
      </button>
    </UserWrapper>
  );
};
