import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 6px 12px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;

  &.active {
    color: white;
    background-color: black;
  }
`;