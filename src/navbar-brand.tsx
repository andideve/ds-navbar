import React, { forwardRef } from 'react';
import { Typography, TypographyProps } from '@andideve/ds-typography';

export type NavbarBrandProps = TypographyProps;

export const NavbarBrand = forwardRef<HTMLSpanElement, NavbarBrandProps>(
  ({ children, ...rest }, ref) => (
    <Typography as="span" ref={ref} fontWeight="semibold" {...rest}>
      {children}
    </Typography>
  ),
);

export default NavbarBrand;
