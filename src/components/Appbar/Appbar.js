import { StyledNavLink } from './Appbar.styled';

const Appbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users"> Users</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/add"> Add</StyledNavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Appbar;
