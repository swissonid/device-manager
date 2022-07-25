import React from 'react';
import { ButtonProps, RawButton } from '../RawButton';


const SecondaryButton = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref: React.Ref<HTMLAnchorElement | HTMLButtonElement> | null) => {
    return (
      <RawButton
        ref={ref}
        className={'text-secondary hover:bg-gray-200 active:bg-gray-300'}
        {...props}
      />
    );
  });
SecondaryButton.displayName = 'SecondaryButton';
export default SecondaryButton;