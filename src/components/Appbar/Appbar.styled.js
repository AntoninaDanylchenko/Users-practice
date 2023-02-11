import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: grey;
  text-decoration: none;
  &.active {
    color: green;
  }
`;

export const StyledListNav = styled.ul`
  style-list: none;
`;
