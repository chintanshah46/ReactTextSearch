import React, {
  FC,
  InputHTMLAttributes,
  ChangeEventHandler,
  RefObject,
} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  highlight_css: string;
  label?: string;
  wrapperClass?: string;
  className?: string;
  onChange?: any;
  onBlur?: any;
  onFocus?: any;
  onKeyPress?: any;
  ref?: RefObject<any>;
}

const Input: FC<InputProps> = ({
  name,
  highlight_css,
  label,
  wrapperClass,
  onChange,
  onBlur,
  onFocus,
  onKeyPress,
  ref,
  ...rest
}) => {
  return (
    <div className={wrapperClass}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        highlight_css={highlight_css}
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyPress={onKeyPress}
        {...rest}
      />
    </div>
  );
};

export default Input;
