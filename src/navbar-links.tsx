import styled from '@emotion/styled';
import {
  compose,
  createSfp,
  layout,
  LayoutProps,
  grid,
  GridProps,
  flexbox,
  FlexboxProps,
} from '@andideve/styled-system';

type SystemProps = LayoutProps & GridProps & FlexboxProps;

const systemProps = compose<SystemProps>(layout, grid, flexbox);
const shouldForwardProp = createSfp(systemProps.propNames);

export interface NavbarLinksProps extends SystemProps {
  ref?: React.Ref<HTMLUListElement>;
  children?: React.ReactNode;
  spacing?: string | number;
}

export const NavbarLinks = styled('ul', { shouldForwardProp })<NavbarLinksProps>(
  {
    listStyle: 'none',
    display: 'flex',
  },
  ({ spacing = '1.5rem' }) => ({
    'li:not(:first-of-type)': {
      marginLeft: spacing,
    },
  }),
  systemProps,
);

export default NavbarLinks;
