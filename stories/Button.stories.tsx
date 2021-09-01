import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../components/button';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../components/button';

export default {
  title: 'Simpli.finance/Button',
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    status: {
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'radio' },
    },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'MINT NFT',
  status: 'primary',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'CANCEL TRANSACTION',
  status: 'secondary',
  disabled: false,
};

export const Danger = Template.bind({});
Danger.args = {
  text: 'WITHDRAW DEPOSIT',
  status: 'danger',
  disabled: false,
};
