import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { baseColor } from '../../styles/variables/colors';

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: ${baseColor};
  padding: 0 2rem;
`;

export const HeaderContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 40px;
  vertical-align: middle;
`;

export const Slogan = styled.span`
  color: white;
  padding-left: 1rem;
  font-size: 1.25rem;
  vertical-align: middle;
`;

export const NavigationItem = styled(NavLink)`
  color: #d7e3ea;
  transition: 100ms color ease-in;

  /* Active class provided by react-router's NavLink logic */
  &.active {
    color: white;
    pointer-events: none;
  }

  &:hover {
    color: white;
  }
`;

export const Navigation = styled.nav`
  margin-left: 2rem;

  ${NavigationItem} ~ ${NavigationItem} {
    padding-left: 0.5rem;
  }
`;

export const Content = styled.div`
  padding: 100px 2rem 0;
  margin: 0 auto;
`;
