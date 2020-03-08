import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { baseColor } from '../../styles/variables/colors';

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: ${baseColor};
  padding: 0 1rem;

  @media (min-width: 768px) {
    height: 70px;
  }
`;

export const HeaderContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 20px;
  vertical-align: middle;

  @media (min-width: 768px) {
    height: 40px;
  }
`;

export const Slogan = styled.span`
  display: none;
  color: white;
  padding-left: 0.5rem;
  font-size: 1.1rem;
  vertical-align: middle;

  @media (min-width: 768px) {
    display: inline-block;
  }
`;

export const NavigationItem = styled(NavLink)`
  color: #d7e3ea;
  transition: 100ms color ease-in;

  /* Active class provided by react-router's NavLink logic */
  &.active {
    color: white;
    /* pointer-events: none; */
  }

  &:hover {
    color: white;
  }
`;

export const Navigation = styled.nav`
  margin-left: 1rem;

  ${NavigationItem} ~ ${NavigationItem} {
    padding-left: 0.5rem;
  }
`;

export const Content = styled.div`
  padding: 60px 1rem 4rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding-top: 100px;
  }
`;
