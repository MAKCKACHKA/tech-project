import React, { useEffect, useState } from 'react';

import css from './products.module.css';
import { FiShoppingCart } from 'react-icons/fi';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from 'redux/parfums/shopingSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Added = () => toast('Пахнючку добавлено до кошика!');

export default function Products() {
  const [data, setData] = useState([]);
  const apiUrl =
    'https://makckachka.github.io/parfume-project-layout/parfume.json';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);

        if (response.status !== 200) {
          throw new Error(
            `Network response was not ok, status: ${response.status}`
          );
        }
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const handleAddToCart = product => {
    dispatch(addProduct(product));
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      <ToastContainer />
      <ul className={css.ProductList}>
        {data.map(product => (
          <li key={product.code} className={css.ProductListItem}>
            <div className={css.ProductListLink}>
              <div className={css.imgWrapper}>
                {!cart.some(item => item.code === product.code) ? (
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
                )}
                <img
                  className={css.prodImg}
                  src={product.image}
                  alt={product.name}
                />
                <p className={css.overlay}>{product.description}</p>
              </div>
              <div className={css.ProductText}>
                <h3 className={css.ProductItemTitle}>{product.name}</h3>
                <p className={css.ProductItemText}>{product.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
