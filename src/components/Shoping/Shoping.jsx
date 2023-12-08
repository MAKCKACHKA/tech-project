import React, { useEffect } from 'react';

import css from './shoping.module.css';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct, increase, decrease } from 'redux/parfums/shopingSlice';

export default function Shoping({ sum, setSum }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const handleDelete = id => {
    dispatch(removeProduct(id));
  };

  const increaseR = id => {
    dispatch(increase(id));
  };

  const decreaseR = id => {
    dispatch(decrease(id));
  };
  useEffect(() => {
    const newSum = cart.reduce((acc, product, index) => {
      const productPrice = !isNaN(product.counter * 100)
        ? product.counter * 100
        : 0;
      return acc + productPrice;
    }, 0);

    setSum(newSum);
  }, [cart, setSum]);

  return (
    <div>
      <ul id="products" className={css.listGroup}>
        {cart ? (
          cart.map((product, index) => (
            <li key={product.code} id={product.code} className={css.groupItem}>
              <img className={css.itemImage} src={product.image} alt="" />
              <div className={css.caption}>
                <span className={css.itemInfo}>
                  <h4 className={css.itemHeading}>{product.name}</h4>
                  <button
                    className={css.delBtn}
                    type="button"
                    onClick={() => handleDelete(product.code)}
                  >
                    <IoMdClose className={css.closeIcon} />
                  </button>
                </span>
                <span className={css.itemInfo}>
                  <p className={css.lead}>{product.counter * 100} грн.</p>
                  <div className={css.counter}>
                    <button
                      onClick={() => {
                        increaseR(product.code);
                      }}
                      className={css.counterButton}
                    >
                      +
                    </button>
                    {/* <p className={css.counterValue}>{counters[index]}</p> */}
                    <p className={css.counterValue}>{product.counter}</p>

                    <button
                      onClick={() => decreaseR(product.code)}
                      className={css.counterButton}
                    >
                      -
                    </button>
                  </div>
                </span>
              </div>
            </li>
          ))
        ) : (
          <p>loading</p>
        )}
      </ul>
      <p className={css.Sum}>
        Загалом: <span>{sum} грн.</span>
      </p>
    </div>
  );
}
