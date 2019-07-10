import { render, cleanup, fireEvent } from '@testing-library/react';
import { Search } from '../Search';

const searchTestId = 'search-test-id';

const factorySearch = (props) => {
  return (
    <div data-testid={searchTestId}>
      <Search {...props} />
    </div>
  );
}

describe('Search Bar', () => {
  let mount;
  beforeEach(() => {
    mount = (props = {}) => render(factorySearch(props));
  });

  afterEach(cleanup);

  it('should render', () => {
    const { queryByTestId } = mount();
    expect(queryByTestId(searchTestId)).toBeTruthy();
  });

  it('should render a input with initial value', () => {
    const fakeValue = 'initial';
    const { container } = mount({ value: fakeValue });
    const input = container.querySelector('input');
    expect(input).not.toBeUndefined();
    expect(input.value).toEqual(fakeValue);
  });

  it('should update value when onChange event fires', () => {
    const fakeValue = '';
    const { container } = mount({ value: fakeValue });
    const input = container.querySelector('input');
    expect(input.value).toEqual(fakeValue);
    let word = '';
    'mercadolibre'.split('').forEach((letter) => {
      word += letter;
      fireEvent.change(input, { target: { value: word } });
      expect(input.value).toEqual(word);
    });
  });

  it('should execute onEnter fn when press Enter key', () => {
    const ENTER_KEY_CODE = 13;
    const A_KEY_CODE = 65;
    const keydownHandler = jest.fn();
    const { container } = mount({ value: '', onEnter: keydownHandler });
    const input = container.querySelector('input');
    fireEvent.change(input, { target: { value: 'product' } });
    fireEvent.keyDown(input, { keyCode: ENTER_KEY_CODE, which: ENTER_KEY_CODE });
    expect(keydownHandler).toHaveBeenCalledTimes(1);
    fireEvent.keyDown(input, { keyCode: A_KEY_CODE, which: A_KEY_CODE });
    expect(keydownHandler).toHaveBeenCalledTimes(1);
    fireEvent.keyDown(input, { keyCode: ENTER_KEY_CODE, which: ENTER_KEY_CODE });
    expect(keydownHandler).toHaveBeenCalledTimes(2);
  });
});
