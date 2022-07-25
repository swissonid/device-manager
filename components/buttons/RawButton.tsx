import React, { MouseEventHandler } from 'react';

export interface ButtonProps {
  /** The text of the button. It will be always in uppercase */
  text: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  enabled?: boolean;
  href?: string;
  size?: 'small' | 'medium' | 'large';
}

interface RawButtonProp extends ButtonProps {
  className?: string;
}

function InternalRawButton(props: RawButtonProp, ref: React.Ref<HTMLAnchorElement | HTMLButtonElement> | null) {
  // the ...other is imported so we can use it with radix-ui together. It forwards all the props form the
  // radix-ui lib down to the actual html element so that radix-ui can work as expected
  const { text, href, size, className, onClick, enabled = true, ...other } = props;
  let sizeClass = '';
  switch (size) {
    case 'small':
      sizeClass = 'px-4 py-1.5';
      break;
    case 'large':
      sizeClass = 'px-7 py-3';
      break;
    default :
      sizeClass = 'px-6 py-2.5';
  }
  const classConfig = `${className} 
    uppercase font-medium text-xs leading-tight
    rounded-full 
    inline-flex justify-center items-center 
    cursor-pointer 
    ${sizeClass}
    max-w-fit min-w-[40px] 
    transition-colors duration-150 ease-in-out
    disabled:opacity-25
    disabled:pointer-events-none
    `;
  if (href) {
    return (
      <a className={classConfig} href={href} ref={ref as React.Ref<HTMLAnchorElement>} {...other} onClick={onClick}>
        <span>{text}</span>
      </a>
    );
  } else {
    return (
      <button
        className={classConfig}
        onClick={onClick}
        disabled={!enabled}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...other}
      >
        {text}
      </button>
    );
  }

}

export const RawButton = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, RawButtonProp>(InternalRawButton);




