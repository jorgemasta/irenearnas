import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import NavbarWrapper from 'common/src/components/Navbar';
import Drawer from 'common/src/components/Drawer';
import Button from 'common/src/components/Button';
import Logo from 'common/src/components/UIElements/Logo';
import Box from 'common/src/components/Box';
import HamburgMenu from 'common/src/components/HamburgMenu';
import Container from 'common/src/components/UI/Container';
import { DrawerContext } from 'common/src/contexts/DrawerContext';
import ScrollSpyMenu from 'common/src/components/ScrollSpyMenu';

import LogoImage from 'common/src/assets/image/portfolio/logo-blue.png';
import LogoImageAlt from 'common/src/assets/image/portfolio/logo-gray.png';

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const Data = useStaticQuery(graphql`
    query {
      portfolioJson {
        MENU_ITEMS {
          label
          path
          offset
        }
      }
    }
  `);

  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle} className="portfolio_navbar">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <a className="logo-alt" href="#">
            Irene Arnás
          </a>
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              menuItems={Data.portfolioJson.MENU_ITEMS}
              offset={-70}
            />
            <a className="navbar_button" href="#contacto">
              <Button {...button} title="HABLEMOS" />
            </a>
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#3444f1" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={Data.portfolioJson.MENU_ITEMS}
                drawerClose={true}
                offset={-100}
              />
              <a className="navbar_drawer_button" href="#contacto">
                <Button {...button} title="HABLEMOS" />
              </a>
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['64px', '80px'],
  },
  button: {
    type: 'button',
    fontSize: '16px',
    pl: '0',
    pr: '0',
    colors: 'primary',
    minHeight: 'auto',
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
