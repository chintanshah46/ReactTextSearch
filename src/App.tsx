import React, { useRef } from 'react';
import { useState } from 'react';
import Input from './components/Input';
import Highlighter from './components/Highlighter';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [css, setCss] = useState('');
  const areaRef = useRef<HTMLInputElement>(null);

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    areaRef.current = e.currentTarget;
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (areaRef.current && areaRef.current.contains(e.target)) {
      e.target.value = '';
      setSearch((search) => e.target.value);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch((search) => e.target.value);

    var hl_css = e.currentTarget.getAttribute('highlight_css');
    setCss((css) => hl_css);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const re = /[0-9a-zA-Z]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="App">
      <Input
        name="underline"
        label="Under Line Style"
        type="text"
        placeholder="Search for underlined"
        className="search"
        highlight_css="underline"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
      ></Input>

      <Input
        name="bold"
        label="Bold Style"
        type="text"
        placeholder="Search for bold effect"
        className="search"
        highlight_css="bold"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
      ></Input>

      <Input
        name="red"
        label="Red Font Style"
        type="text"
        placeholder="Search for Red font effect"
        className="search"
        highlight_css="red"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
      ></Input>

      {/* /* .text {
  background-color: rgb(209, 209, 209);
  padding: 10px;
  box-shadow: 0 0 2px rgba(black, 0.2), 0 0 15px rgba(black, 0.2);
  font-size: 16px;
  line-height: 1.5em;
  margin-top: 50px;
} */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        Hello world! 123
      </div>
      <div className="p-8">
        <Highlighter highlight={search} css={css}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Highlighter>
      </div>
    </div>
  );
}

export default App;
