import React, { useEffect } from 'react';

import css from './products.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from 'redux/parfums/shopingSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegHeart } from 'react-icons/fa';

import { selectAdverts } from 'redux with mockapi/adverts/selesctors';
const Added = () => toast('Car added to favorite!');

const SvgLine = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2"
    height="16"
    viewBox="0 0 2 16"
    fill="none"
  >
    <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1" />
  </svg>
);
const SvgLike = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    className={css.addToCartIcon}
  >
    <path
      d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95402C16.7321 7.45342 16.8388 6.91687 16.8388 6.375C16.8388 5.83313 16.7321 5.29658 16.5247 4.79598C16.3172 4.29539 16.0132 3.84057 15.63 3.4575Z"
      className={css.addToCartIcon}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const SvgLikeActive = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    className={css.active}
  >
    <path
      d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95402C16.7321 7.45342 16.8388 6.91687 16.8388 6.375C16.8388 5.83313 16.7321 5.29658 16.5247 4.79598C16.3172 4.29539 16.0132 3.84057 15.63 3.4575Z"
      className={css.active}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Products() {
  const adverts = useSelector(selectAdverts);

  useEffect(() => {
    console.log(adverts);
  }, []);

  // const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const handleAddToCart = product => {
    dispatch(addProduct(product));
  };

  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  return (
    <>
      <ToastContainer />
      <ul className={css.ProductList}>
        {adverts.map(car => (
          <li key={car.id} className={css.ProductListItem}>
            <div className={css.imgWrapper}>
              {/* {!cart.some(item => item.id === product.code) ? (
                  <button
                    type="button"
                    className={css.addToCart}
                    onClick={() => {
                      handleAddToCart(product);
                      Added();
                    }}
                  >
                    <FiShoppingCart className={css.addToCartIcon} />
                  </button>
                ) : (
                  <button
                    disabled
                    type="button"
                    className={css.success}
                    onClick={() => handleAddToCart(product)}
                  >
                    <FiShoppingCart className={css.addToCartIcon} />
                  </button>
                )} */}
              <button
                type="button"
                className={css.addToCart}
                onClick={() => {
                  handleAddToCart(car);
                  Added();
                }}
              >
                {/* <FiShoppingCart className={css.addToCartIcon} /> */}
                <SvgLike />
                {/* <SvgLikeActive /> */}
              </button>
              <div className={css.prodImg}>
                <img src={car.img} alt={car.make + ' ' + car.model} />
              </div>
            </div>
            <div className={css.ProductText}>
              <div className={css.TitleContainer}>
                <h3 className={css.ProductItemTitle}>
                  {car.make}{' '}
                  <span className={css.TitleModel}>{car.model},</span>{' '}
                  {car.year}
                </h3>
                <h4 className={css.TitlePrice}>{car.rentalPrice}</h4>
              </div>
              <div className={css.TextContainer}>
                <p className={css.ProductInfo}>
                  {car.address.split(',').map(part => part.trim())[1]}
                </p>
                <SvgLine />
                <p className={css.ProductInfo}>
                  {car.address.split(',').map(part => part.trim())[2]}
                </p>{' '}
                <SvgLine />
                <p className={css.ProductInfo}>{car.rentalCompany}</p>{' '}
                <SvgLine />
                {/* <p className={css.ProductInfo}>{car.rentalCompany},</p> */}
                <p className={css.ProductInfo}>{car.type}</p> <SvgLine />
                <p className={css.ProductInfo}>{car.model}</p> <SvgLine />
                <p className={css.ProductInfo}>{car.id}</p> <SvgLine />
                <p className={css.ProductInfo}>
                  {car.accessories.map(part => part.trim())[1]}
                </p>{' '}
              </div>
              <button
                type="button"
                className={css.LearnMore}
                onClick={() => {}}
              >
                Learn more
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button type="button" className={css.LoadMore}>
        Load more
      </button>
    </>
  );
}
