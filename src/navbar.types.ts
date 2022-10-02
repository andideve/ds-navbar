import { BoxProps } from '@andideve/ds-box';

export type BaseNavbarProps = Pick<BoxProps, 'as' | 'theme' | 'children' | 'className' | 'style'>;

export type NavbarProps = BaseNavbarProps & BoxProps;
