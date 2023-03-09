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
  // error?: string;
  // register?: any;
  wrapperClass?: string;
  className?: string;
  // onChange?: ChangeEventHandler;
  onChange?: any;
  ref?: RefObject<any>;
}

const Input: FC<InputProps> = ({
  // register,
  name,
  highlight_css,
  // error,
  label,
  wrapperClass,
  onChange,
  ref,
  ...rest
}) => {
  return (
    <div className={wrapperClass}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        // aria-invalid={error ? 'true' : 'false'}
        // {...register(name)}
        highlight_css={highlight_css}
        name={name}
        ref={ref}
        onChange={onChange}
        {...rest}
      />
      {/* {error && <span role="alert">{error}</span>} */}
    </div>
  );
};

export default Input;
