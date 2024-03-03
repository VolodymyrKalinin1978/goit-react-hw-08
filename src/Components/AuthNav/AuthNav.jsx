import { LinkNav } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <LinkNav to="/register">Register</LinkNav>
      <LinkNav to="/login">Log In</LinkNav>
    </div>
  );
};
