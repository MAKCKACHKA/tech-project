import React from 'react';

import css from './filter.module.css';

export default function Filter() {
  const data = [
    { value: '1', label: 'Amazon' },
    { value: '2', label: 'Apple' },
    { value: '3', label: 'Facebook' },
    { value: '4', label: 'Google' },
    { value: '5', label: 'Instagram' },
    { value: '6', label: 'Microsoft' },
    { value: '7', label: 'Twitter' },
    { value: '8', label: 'YouTube' },
  ];

  const [text, setText] = React.useState('');
  const onChange = event => {
    setText(event.target.value);
  };

  return (
    <form
      role="search"
      method="get"
      id="searchform"
      className={css.filterList}
      action=""
    >
      {/* input field activates onKeyUp function on state change */}
      <input
        className={css.filterInput}
        type="search"
        onChange={() => {}}
        name="Search"
        id="Search"
        placeholder="Search"
      />
      <input
        className={css.filterInput}
        type="search"
        list="list"
        autoComplete="on"
        value={text}
        onChange={onChange}
      />
      <datalist id="list">
        {data.map(d => (
          <option key={d.value} value={d.label} />
        ))}
      </datalist>
      {/* <button type="submit" id="searchsubmit">
            <i className="search" aria-hidden="true" />
          </button> */}
    </form>
  );
}
<ul className={css.filterList}>
  <li>
    <button type="button" className={css.filterButton}>
      All
    </button>
  </li>
  <li>
    <button type="button" className={css.filterButton}>
      Web Site
    </button>
  </li>
  <li>
    <button type="button" className={css.filterButton}>
      App
    </button>
  </li>
  <li>
    <button type="button" className={css.filterButton}>
      Design
    </button>
  </li>
  <li>
    <button type="button" className={css.filterButton}>
      Marketing
    </button>
  </li>
</ul>;
