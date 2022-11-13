import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '@andideve/ds-box';

import Navbar from '../navbar';

export default {
  title: 'Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => (
  <Navbar justifyContent={{ _: 'space-between', lg: 'unset' }} {...args}>
    <Navbar.Brand style={{ textTransform: 'uppercase' }}>Logo</Navbar.Brand>
    <Box display={{ _: 'none', lg: 'block' }} mx="3rem">
      <Navbar.Links as="ul">
        <li>
          <Navbar.Link aria-current="page" href="/" color="foreground.primary">
            Home
          </Navbar.Link>
        </li>
        <li>
          <Navbar.Link href="/about-us" color="foreground.secondary">
            About Us
          </Navbar.Link>
        </li>
        <li>
          <Navbar.Link href="/pricing" color="foreground.secondary">
            Pricing
          </Navbar.Link>
        </li>
        <li>
          <Navbar.Link href="/features" color="foreground.secondary">
            Features
          </Navbar.Link>
        </li>
        <li>
          <Navbar.Link href="/contact" color="foreground.secondary">
            Contact
          </Navbar.Link>
        </li>
      </Navbar.Links>
    </Box>
    <Box display={{ _: 'block', lg: 'none' }} mr="-0.75rem">
      <Navbar.Toggle />
    </Box>
  </Navbar>
);

export const Basic = Template.bind({});
Basic.args = {};
