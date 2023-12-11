import React, { useState } from 'react';

import css from './filter.module.css';
import Select, { components } from 'react-select';
import { options, priceList } from './options';
import { selectAdverts } from 'redux with mockapi/adverts/selesctors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFiltered } from 'redux with mockapi/operations';

const CustomSingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props}>To {children} $</components.SingleValue>
);

export default function Filter({ setIsFiltered, setFiltered }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');

  const adverts = useSelector(selectAdverts);

  const dispatch = useDispatch();

  const filterParams = {
    brand: brand,
    price: price !== '' ? `$${price}` : '',
    from: from,
    to: to,
  };

  const filtered = adverts.filter(advert => {
    const brandMatch = filterParams.brand
      ? advert.make === filterParams.brand
      : true;
    const priceMatch = filterParams.price
      ? advert.rentalPrice === filterParams.price
      : true;
    const fromMatch = filterParams.from
      ? advert.mileage >= filterParams.from
      : true;
    const toMatch = filterParams.to ? advert.mileage <= filterParams.to : true;

    return brandMatch && priceMatch && fromMatch && toMatch;
  });

  const handleSearch = e => {
    e.preventDefault();
    console.log(
      'Searching with filters:',
      brand,
      price,
      `\nFrom:${from}\nTo:${to}`
    );
    dispatch(fetchFiltered());

    setTimeout(() => {
      setFiltered(filtered);

      setIsFiltered(true);
    }, 200);
  };

  const handleDataChange = selectedOption => {
    const value = selectedOption ? selectedOption.label : '';
    setBrand(value);
  };
  const handlePriceChange = selectedOption => {
    const value = selectedOption ? selectedOption.value : '';
    setPrice(value);
  };

  return (
    <form
      role="search"
      method="get"
      id="searchform"
      className={css.filterList}
      action=""
      onSubmit={handleSearch}
    >
      <div className={css.selectWrap}>
        <label className={css.filterLabel}>Car Brand:</label>
        <Select
          className={css.filterSelect}
          options={options}
          isMulti={false}
          styles={{
            control: (base, state) => ({
              ...base,
              textAlign: 'left',
              width: '224px',
              cursor: 'pointer',
              fontSize: '18px',
              lineHeight: '20px',
              background: '#F7F7FB',
              border: 'none',
              borderRadius: '18px',
              padding: '6px 8px',
              fontWeight: '500',
              color: '#121417',
            }),
            menu: base => ({
              ...base,
              width: '224px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              borderRadius: '14px',
              justifyContent: 'flex-start',
              paddingLeft: '10px',
            }),
            option: styles => ({
              ...styles,
              borderRadius: '14px',
              textAlign: 'left',
              cursor: 'pointer',
              color: 'rgba(18, 20, 23, 0.20)',
              fontFamily: 'Manrope',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '20px',

              '&:hover': {
                color: '#121417',
              },
            }),
            placeholder: provided => ({
              ...provided,
              borderRadius: '18px',
              textAlign: 'left',

              color: '#121417',
              margin: 0,
              padding: 0,
            }),
            indicatorSeparator: () => ({ display: 'none' }),
          }}
          theme={theme => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: 'transparent',
              primary: 'transparent',
            },
          })}
          value={options.find(option => option.value === brand)}
          placeholder="Enter the text"
          onChange={handleDataChange}
        />
      </div>

      <div className={css.selectWrap}>
        <label className={css.filterLabel}>Price/ 1 hour:</label>
        <Select
          className={css.filterSelect}
          options={priceList}
          isSearchable={false}
          isMulti={false}
          styles={{
            control: (base, state) => ({
              ...base,
              textAlign: 'left',
              width: '224px',
              cursor: 'pointer',
              fontSize: '18px',
              lineHeight: '20px',
              background: '#F7F7FB',
              border: 'none',
              borderRadius: '14px',
              padding: '6px 8px',
              fontWeight: '500',
              color: '#121417',
            }),
            menu: base => ({
              ...base,
              width: '224px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              borderRadius: '14px',
              justifyContent: 'flex-start',
              paddingLeft: '10px',
            }),
            option: styles => ({
              ...styles,
              borderRadius: '14px',
              textAlign: 'left',
              cursor: 'pointer',
              color: 'rgba(18, 20, 23, 0.20)',
              fontFamily: 'Manrope',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '20px',
              '&:hover': {
                color: '#121417',
              },
            }),
            placeholder: provided => ({
              ...provided,
              textAlign: 'left',
              borderRadius: '14px',
              color: '#121417',
              margin: 0,
              padding: 0,
            }),
            indicatorSeparator: () => ({ display: 'none' }),
          }}
          theme={theme => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: 'transparent',
              primary: 'transparent',
            },
          })}
          placeholder="To $"
          components={{ SingleValue: CustomSingleValue }}
          onChange={handlePriceChange}
          // value={value}
        />
      </div>
      <div className={css.selectWrap}>
        <label className={css.filterLabel}>Сar mileage / km</label>
        <div className={css.inputHolder}>
          <label className={css.fromInput}>
            From
            <input
              type="text"
              id="from"
              className={css.Input}
              // placeholder="From"
              value={from}
              onChange={e => setFrom(e.target.value)}
            />
          </label>
          <label className={css.toInput}>
            To
            <input
              type="text"
              id="to"
              className={css.Input}
              // placeholder="To"
              value={to}
              onChange={e => setTo(e.target.value)}
            />
          </label>
        </div>
      </div>
      <button className={css.submitBtn} type="submit">
        Search
      </button>
    </form>
  );
}
