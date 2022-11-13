import React, { forwardRef } from 'react';
import { StyledTypography, BaseTypographyProps } from '@andideve/ds-typography';

const Anchor = StyledTypography.withComponent('a');

export type NavbarLinkProps = BaseTypographyProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavbarLink = forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  ({ children, ...rest }, ref) => (
    <Anchor ref={ref} size="sm" p="0.25rem" fontWeight="semibold" {...rest}>
      {children}
    </Anchor>
  ),
);

export default NavbarLink;
