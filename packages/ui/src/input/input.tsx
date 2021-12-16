import { forwardRef } from 'react';
import type { HTMLProps } from 'react';
import clsx from 'clsx';

type Props = HTMLProps<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(({ className, ...props }, ref) => {
  return <input {...props} className={clsx('px-4', 'py-2')} ref={ref} />
});

Input.displayName = 'Input';

export default Input;