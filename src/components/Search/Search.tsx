import React, { useState, useCallback } from 'react';
const ENTER_KEY_CODE = 13;

interface SearchProps extends React.InputHTMLAttributes<unknown> {
  name: string;
  placeholder?: string;
  value?: string;
  onEnter?: (word: string) => void;
}

export const Search: React.FunctionComponent<SearchProps> = ({ value: initialValue, onEnter, ...props }) => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback(({ target: { value: val } }) => setValue(val), []);
  const onKeyDown = useCallback((evt) => {
    const { keyCode, which, target: { value: currentValue } } = evt;
    const code = keyCode || which;
    if (code === ENTER_KEY_CODE && onEnter) {
      onEnter(currentValue);
    }
  }, []);

  return <input {...props} value={value} onChange={onChange} onKeyDown={onKeyDown} />;
}
