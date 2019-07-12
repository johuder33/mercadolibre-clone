import React, { useState, useCallback } from 'react';
import './search.scss';
const ENTER_KEY_CODE = 13;

interface SearchProps {
  name: string;
  placeholder?: string;
  value?: string;
  onEnter?: (word: string) => void;
  onClick?: (word: string) => void;
}

export const Search: React.FunctionComponent<SearchProps> = ({ value: initialValue, onEnter, onClick }) => {
  const [value, setValue] = useState(initialValue || '');
  const onChange = useCallback(({ target: { value: val } }) => setValue(val), []);
  const onClickHandler = useCallback(() => {
    if (onClick) {
      onClick(value);
    }
  }, []);
  const onKeyDown = useCallback((evt) => {
    const { keyCode, which, target: { value: currentValue } } = evt;
    const code = keyCode || which;
    if (code === ENTER_KEY_CODE && onEnter) {
      onEnter(currentValue);
    }
  }, []);

  return (
    <div className={'searchContainer'}>
      <input className={'searchInput'} value={value} onChange={onChange} onKeyDown={onKeyDown} />
      <button className={'searchButton'} onClick={onClickHandler}>
        <img src={'/static/icons/ic_search.png'} srcSet={'/static/icons/ic_search.png, /static/icons/ic_search@2x.png 2x'} />
      </button>
    </div>
  );
}
