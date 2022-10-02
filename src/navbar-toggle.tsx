import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { IconButton, IconButtonProps } from '@andideve/ds-button';

const Humberger = styled.span<{ size?: string; expanded?: boolean }>(
  ({ size = '1.5rem' }) => ({
    '--size': size,
  }),
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: 'var(--size)',
    height: 'var(--size)',
    '&:before, &:after': {
      content: '""',
      width: '100%',
      height: 1,
      backgroundColor: 'var(--ds-colors-foreground-primary)',
      transition: 'transform .2s ease',
    },
  },
  ({ expanded }) => {
    if (!expanded) return {};
    return {
      '&:before': {
        transform: 'translateY(calc(var(--size) / 4)) rotate(45deg)',
      },
      '&:after': {
        transform: 'translateY(calc(-1 * (var(--size) / 4))) rotate(-45deg)',
      },
    };
  },
);

export interface NavbarToggleProps extends IconButtonProps {
  expanded?: boolean;
  iconSize?: string;
}

export const NavbarToggle = forwardRef<HTMLButtonElement, NavbarToggleProps>(
  ({ expanded, iconSize, ...rest }, ref) => (
    <IconButton ref={ref} aria-label="Toggle navigation" variant="plain" {...rest}>
      <Humberger expanded={expanded} size={iconSize} />
    </IconButton>
  ),
);

export default NavbarToggle;
