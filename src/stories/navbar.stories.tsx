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
      <Navbar.Links>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about-us">About Us</Navbar.Link>
        <Navbar.Link href="/pricing">Pricing</Navbar.Link>
        <Navbar.Link href="/features">Features</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Links>
    </Box>
    <Box display={{ _: 'block', lg: 'none' }} mr="-0.75rem">
      <Navbar.Toggle />
    </Box>
  </Navbar>
);

export const Basic = Template.bind({});
Basic.args = {};
