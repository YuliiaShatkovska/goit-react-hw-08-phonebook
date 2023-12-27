import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logoutUser } from '../../redux/auth/operations';
import { LogOutBtn, LogoutBox } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <LogoutBox>
      <p>Welcome, {name}!</p>
      <LogOutBtn type="button" onClick={() => dispatch(logoutUser())}>
        Log Out
      </LogOutBtn>
    </LogoutBox>
  );
};
