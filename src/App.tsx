import React, { useRef } from 'react';
import { useState } from 'react';
import Input from './components/Input';
import Highlighter from './components/Highlighter';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [css, setCss] = useState('');

  // const [highlight_css, search] = useState(0);

  var underLineInputRef = useRef(null);
  // var highlighterTextRef = React.createRef();

  // const state = { highlight_css: 'underline', search: 'dolor' };

  // var state = { search: 'dolor' };

  // search = 'dolor';

  // setSearch((search) => 'dolor');

  // const handleOnSearch = ({
  //   target: { value: text, HTMLInputElement: ele },
  // }) => {
  //   // console.log(target);
  //   console.log(ele);
  //   console.log(text);
  //   console.log(search);
  //   setSearch((search) => text);
  //   console.log(search);
  //   // console.log(state.search);
  //   // setSearch({ text });
  //   // state.search = text;
  //   // console.log(state.search);
  //   // setCss();
  // };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // No longer need to cast to any - hooray for react!

    console.log(e.target.value);
    console.log(search);
    setSearch((search) => e.target.value);
    console.log(search);

    var hl_css = e.currentTarget.getAttribute('highlight_css');
    console.log(hl_css);
    console.log(css);
    setCss((css) => hl_css);
    console.log(css);

    // this.setState({temperature: e.target.value});
    // setState({ highlight_css: 'bold', search: e.target.value });
    // state.search = e.target.value;
    // console.log(state.search);
    // var ele = document.getElementsByClassName('highlighter')[0];
    // ele.setAttribute('highlight', state.search);
    // console.log(highlighterTextRef);
    // Highlighter.apply(highlight:state.search);
  };

  return (
    <div className="App">
      {/* <input type="text" value="" className="search" /> */}
      <Input
        name="underline"
        // ref={underLineInputRef}
        label="Under Line Style"
        type="text"
        placeholder="Search for underlined"
        className="search"
        highlight_css="underline"
        // onChange={() => setSearch((search) => 'test')}
        onChange={onChange}
        // value={state.search}
        // error={errors.email?.message}
        // autoFocus
      ></Input>
      <div className="text">
        <Highlighter
          // ref={highlighterTextRef}
          highlight={search}
          css={css}
        >
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
