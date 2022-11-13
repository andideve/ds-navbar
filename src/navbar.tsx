import React from 'react';
import { Box } from '@andideve/ds-box';

import NavbarBrand from './navbar-brand';
import NavbarLinks from './navbar-links';
import NavbarLink from './navbar-link';
import NavbarToggle from './navbar-toggle';
import { NavbarProps } from './navbar.types';

export const Navbar: React.FC<NavbarProps> & {
  Brand: typeof NavbarBrand;
  Links: typeof NavbarLinks;
  Link: typeof NavbarLink;
  Toggle: typeof NavbarToggle;
} = ({ children, ...rest }) => (
  <Box as="nav" display="flex" alignItems="center" px="5vw" height="4.5rem" {...rest}>
    {children}
  </Box>
);

Navbar.Brand = NavbarBrand;
Navbar.Links = NavbarLinks;
Navbar.Link = NavbarLink;
Navbar.Toggle = NavbarToggle;

export default Navbar;
