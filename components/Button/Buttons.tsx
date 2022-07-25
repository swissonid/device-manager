import React from 'react';

export interface ButtonProps {
  child: string;
  href?: string;
  size?: 'small' | 'medium' | 'large';
}

interface RawButtonProp extends ButtonProps {
  className?: string;
}

function RawButton({ child, href, size, className }: RawButtonProp) {
  switch (size) {
    case 'small':
  }
  const classConfig = `${className} 
    uppercase font-medium text-xs 
    rounded-full 
    inline-flex justify-center items-center 
    cursor-pointer 
    max-w-fit min-w-[40px] px-6 py-2.5
    transition-colors
    `;
  return (
    <a className={classConfig} href={href}>
      <span>{child}</span>
    </a>
  );
}

export function PrimaryButton(props: ButtonProps) {
  return (
    <RawButton
      child={props.child}
      className="bg-secondary text-onSecondary hover:bg-secondary-600 active:bg-secondary-700"
    />
  );
}

export function SecondaryButton(props: ButtonProps) {
  return (
    <RawButton
      child={props.child}
      className="text-secondary hover:bg-gray-200 active:bg-gray-300"
    />
  );
}
