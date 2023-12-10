import React, { useEffect, useState } from 'react';

import css from './products.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { addProduct } from 'redux/parfums/shopingSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  selectAdverts,
  selectFavorite,
} from 'redux with mockapi/adverts/selesctors';
import {
  addProduct,
  removeProduct,
} from 'redux with mockapi/adverts/favoriteSlice';
import { SvgLike, SvgLikeActive, SvgLine } from 'project-folder/Svg';
import ModalW from 'components/Modal/Modal';

const Added = () => toast('Car added to favorites!');
const Removed = () => toast('Car removed from favorites!');

export default function Products() {
  const adverts = useSelector(selectAdverts);
  const favorite = useSelector(selectFavorite);

  useEffect(() => {
    console.log(adverts);
  }, []);

  useEffect(() => {
    console.log(favorite);
  }, [favorite]);

  // const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const handleAdd = product => {
    dispatch(addProduct(product));
  };
  const handleRemove = id => {
    dispatch(removeProduct(id));
  };

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [carData, setcarData] = useState({});

  return (
    <>
      <ToastContainer />
      <ul className={css.ProductList}>
        {adverts.map(car => (
          <li key={car.id} className={css.ProductListItem}>
            <div className={css.imgWrapper}>
              {!favorite.some(item => item.id === car.id) ? (
                <button
                  type="button"
                  className={css.addToCart}
                  onClick={() => {
                    handleAdd(car);
                    Added();
                  }}
                >
                  {/* <FiShoppingCart className={css.addToCartIcon} /> */}
                  <SvgLike />
                  {/* <SvgLikeActive /> */}
                </button>
              ) : (
                <button
                  type="button"
                  className={css.addToCart}
                  onClick={() => {
                    handleRemove(car.id);
                    Removed();
                  }}
                >
                  {/* <FiShoppingCart className={css.addToCartIcon} /> */}
                  {/* <SvgLike /> */}
                  <SvgLikeActive />
                </button>
              )}

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
                onClick={() => {
                  setcarData(car);
                  setIsOpenModal(true);
                  console.log(isOpenModal, carData);
                }}
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
      {isOpenModal && (
        <ModalW
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          carData={carData}
        />
      )}
    </>
  );
}
