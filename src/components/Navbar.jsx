import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const NavbarStyled = styled.nav`
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem 1rem 2rem;
  z-index: 10;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    backdrop-filter: blur(3px);
    transition: 0.3s ease-in-out;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
    top: ${({ isOpen }) => (isOpen ? "0" : "-500%")};
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(15, 15, 15, 0.6);
    z-index: 20;
  }
`;

const NavlinkStyled = styled(NavLink)`
  color: #000;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 1rem 0.3rem;
  cursor: pointer;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  &:hover:not(.navbar-brand) {
    border-color: #b4ca76;
  }
  &.active:not(.navbar-brand) {
    border-color: #b4ca76;
  }
  &.navbar-brand {
    font-size: 1.5rem;
    font-weight: 600;
    color: #000;
  }
  @media screen and (max-width: 991px) {
    &.navbar-brand {
      font-size: 1.1rem;
    }
  }
  @media screen and (max-width: 768px) {
    color: #fff;
    &.navbar-brand {
      font-size: 1rem;
    }
  }
`;
const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: ${({ isOpen }) => (isOpen ? "fixed" : "absolute")};
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 21;
  }
`;

const Navbar = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [burgerOpen, setBurgerOpen] = useState(false);
  return (
    <NavbarStyled>
      <NavlinkStyled to="/" className="navbar-brand">
        Universal Agrobisnis Indonesia
      </NavlinkStyled>
      <MobileMenu
        isOpen={burgerOpen}
        onClick={() => setBurgerOpen(!burgerOpen)}
      >
        {burgerOpen ? <MdClose color="#fff" /> : <FaBars color="#000" />}
      </MobileMenu>
      <NavMenu isOpen={burgerOpen}>
        <NavlinkStyled onClick={() => setBurgerOpen(!burgerOpen)} to="/" exact>
          Home
        </NavlinkStyled>
        <NavlinkStyled onClick={() => setBurgerOpen(!burgerOpen)} to="/about">
          About
        </NavlinkStyled>
        <NavlinkStyled onClick={() => setBurgerOpen(!burgerOpen)} to="/product">
          Products
        </NavlinkStyled>
        <NavlinkStyled onClick={() => setBurgerOpen(!burgerOpen)} to="/contact">
          Contact Us
        </NavlinkStyled>
      </NavMenu>
    </NavbarStyled>
  );
};

export default Navbar;
