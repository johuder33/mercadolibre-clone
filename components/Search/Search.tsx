import React, { useState, useCallback } from 'react';

interface ISearchProps {
  name: string;
  value?: string;
  onEnter?: () => void;
  onClick?: () => void;
  placeholder?: string;
}

export const Search: React.FunctionComponent<ISearchProps> = ({ value: initialValue, name, ...props }) => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((event) => {
    const { value: currentValue } = event.target;
    setValue(currentValue);
  }, []);

  return (
    <input {...props} style={{ fontSize: '18px', width: '100%', padding: '7px 60px 9px 15px' }} name={name} value={value} onChange={onChange} />
  );
}
