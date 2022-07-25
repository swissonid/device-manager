import React from 'react';
import { ButtonProps, RawButton } from '../RawButton';

const PrimaryButton = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref: React.Ref<HTMLAnchorElement | HTMLButtonElement> | null) => {
    return (
      <RawButton
        ref={ref}
        className={'bg-secondary text-onSecondary hover:bg-secondary-600 active:bg-secondary-700'}
        {...props}
      />
    );
  });
PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;