import { ComponentStory, Meta } from '@storybook/react';
import SecondaryButton from './SecondaryButton';

export default {
  title: 'Components/Buttons/SecondaryButton',
  component: SecondaryButton,
} as Meta;


const Template: ComponentStory<typeof SecondaryButton> = (args) =>
  <SecondaryButton {...args} />;

export const Secondary = Template.bind({});
Secondary.storyName = 'Secondary Button';
Secondary.args = {
  text: 'Secondary Button',
  size: 'medium',
  href: undefined,
  enabled: true,
  onClick: () => console.log('I was clicked'),
};
