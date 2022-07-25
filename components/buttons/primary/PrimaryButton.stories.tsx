import { ComponentStory, Meta } from '@storybook/react';
import PrimaryButton from './PrimaryButton';

export default {
  title: 'Components/Buttons/PrimaryButton',
  component: PrimaryButton,
} as Meta;


const Template: ComponentStory<typeof PrimaryButton> = (args) =>
  <PrimaryButton {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Primary Button';
Primary.args = {
  text: 'Primary Button',
  size: 'medium',
  href: undefined,
  enabled: true,
  onClick: () => console.log('I was clicked'),
};
