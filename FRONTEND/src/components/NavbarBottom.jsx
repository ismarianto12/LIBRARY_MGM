import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Icon from 'react-feather';

const NavbarContainer = styled.div`
  position: fixed;
  bottom: 0; 
  max-width: 480px !important;
  right: 0;
  left: 0;
  margin: 0 auto;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0px 10px 0px;
  z-index: 1000;
`;

const NavbarItem = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 14px;
  font-weight: 500;
  text-align: center;

  &:hover {
    color: #007bff;
  }
`;
const BottomNavbar = () => {
  return (
    <NavbarContainer>
      <NavbarItem to="/"><Icon.Home /><br />Home</NavbarItem>
      <NavbarItem to="/signup"><Icon.User /><br />Member</NavbarItem>
      <NavbarItem to="/createBook"><Icon.HelpCircle /><br />Create Book</NavbarItem>
    </NavbarContainer>
  );
};

export default BottomNavbar;
