import React, { forwardRef } from 'react';
import { Box } from '@andideve/ds-box';

import NavbarBrand from './navbar-brand';
import NavbarLinks from './navbar-links';
import { NavbarLink, NavbarLinkProps } from './navbar-link';
import NavbarToggle from './navbar-toggle';
import { NavbarProps } from './navbar.types';

const Link = forwardRef<HTMLAnchorElement, NavbarLinkProps>(({ children, ...rest }, ref) => (
  <li>
    <NavbarLink ref={ref} {...rest}>
      {children}
    </NavbarLink>
  </li>
));

export const Navbar: React.FC<NavbarProps> & {
  Brand: typeof NavbarBrand;
  Links: typeof NavbarLinks;
  Link: typeof Link;
  Toggle: typeof NavbarToggle;
} = ({ children, ...rest }) => (
  <Box as="nav" display="flex" alignItems="center" px="5vw" height="4.5rem" {...rest}>
    {children}
  </Box>
);

Navbar.Brand = NavbarBrand;
Navbar.Links = NavbarLinks;
Navbar.Link = Link;
Navbar.Toggle = NavbarToggle;

export default Navbar;
