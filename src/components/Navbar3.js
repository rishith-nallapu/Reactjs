import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import law from './justice 2.jpeg';


const NavbarContainer = styled.nav`
  background-color: #212529;
  padding: 18px;
  position: fixed;
  width: 100%;
  height: 85px;
  top: 0;
  z-index: 1000;
`;

const NavbarList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center; /* Center vertically */
`;

const NavbarItem = styled.li`
  margin-right: 15px;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;

  &:hover {
    border-sizing: border-box;
    padding: 8px;
    border-radius: 8px;
    background-color: white;
    color: black;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid white;
  margin-right: 10px; 
  margin-left:20px;
`;

const UserName = styled.span`
  color: white;
  font-size: 18px;
  text-decoration: overline;

`;

const ContentBelowNavbar = styled.div`
  margin-top: 60px;
  padding: 20px;
`;

const Navbar3 = ({ children }) => {
  const navigate3 = useNavigate();

  const handleLogoClick = () => {
    navigate3('/');
  };

  return (
    <>
      <NavbarContainer>
        <NavbarList>
          <NavbarItem>
            <NavbarLink to="/caseslist" >
              Cases list
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/dates" >
              Issuing dates
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/pendingcases" >
              Pending cases
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/pretrial" >
              Pre-trial
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/caserecord" >
              Case record
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <LogoContainer onClick={handleLogoClick}>
              <LogoImage src={law} alt="Logo" />   <br />
            </LogoContainer>
          </NavbarItem>
        </NavbarList>
      </NavbarContainer>
      <ContentBelowNavbar>{children}</ContentBelowNavbar>
    </>
  );
};

export default Navbar3;
