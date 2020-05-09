import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.css';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import MainHeader from './MainHeader';
import Backdrop from '../UIElements/Backdrop';

const MainNavigation = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Fragment>
      {isDrawerOpen && <Backdrop onClick={() => setIsDrawerOpen(false)} />}
      {/* Side drawer visibility is controlled by show Props */}
      <SideDrawer show={isDrawerOpen} onClick={() => setIsDrawerOpen(false)}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="main-navigation__menu-btn"
        >
          <span />
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Places.com</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </Fragment>
  );
};
export default MainNavigation;
