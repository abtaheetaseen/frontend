import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useSelector } from "react-redux";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  const {cartTotalQuantity} = useSelector(state => state.cart);

  const Nav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;
      list-style-type: none;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          text-transform: uppercase;
          color: whitesmoke;
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: goldenrod;
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 30px;
      }

      .cart-total--item {
        width: 22px;
        height: 22px;
        position: absolute;
        color: white;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -80%;
        left: 95%;
        background-color: goldenrod;
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 2.5rem;
          color: goldenrod;
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 2.5rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: goldenrod;
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }

      .active .navbar-lists {
        list-style-type: none;
        height: 100vh;
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;
        background-color: rgba(38,31,31);
        position: fixed;

        .navbar-link {
          font-size: 22px;
        }
      }
      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 3rem;
        }

        .cart-total--item {
          width: 35px;
          height: 35px;
          font-size: 25px;
        }
      }

      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cuisine"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Cuisine
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Book Table
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              {/* <FiShoppingCart className="cart-trolley" /> */}
              Order
              <span className="cart-total--item"> {cartTotalQuantity} </span>
            </NavLink>
          </li>
        </ul>

        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Nav;
