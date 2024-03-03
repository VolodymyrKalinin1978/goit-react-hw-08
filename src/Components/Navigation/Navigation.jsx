import { useAuth } from '../../hooks';
import css from './Navigation.module.css';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link className={css.link} activeClassName={css.active} to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link className={css.link} activeClassName={css.active} to="/contacts">
          Contacts
        </Link>
      )}
    </nav>
  );
};
