import React, { forwardRef } from 'react';
import { StyledTypography, BaseTypographyProps } from '@andideve/ds-typography';

const Anchor = StyledTypography.withComponent('a');

export interface NavbarLinkProps
  extends BaseTypographyProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

export const NavbarLink = forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  ({ children, active, ...rest }, ref) => (
    <Anchor
      ref={ref}
      aria-current={active ? 'page' : undefined}
      size="sm"
      p="0.25rem"
      fontWeight="semibold"
      color={active ? 'foreground.primary' : 'foreground.secondary'}
      {...rest}
    >
      {children}
    </Anchor>
  ),
);

export default NavbarLink;
