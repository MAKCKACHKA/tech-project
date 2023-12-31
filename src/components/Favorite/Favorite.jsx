import React, { useEffect, useState } from 'react';

import css from './product-fav.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from 'redux with mockapi/adverts/selesctors';
import { removeProduct } from 'redux with mockapi/adverts/favoriteSlice';
import { SvgLikeActive, SvgLine } from 'project-folder/Svg';
import { ToastContainer, toast } from 'react-toastify';
import ModalW from 'components/Modal/Modal';

export default function FavoriteList() {
  const dispatch = useDispatch();
  const favorite = useSelector(selectFavorite);
  const Removed = () => toast('Car removed from favorites!');

  useEffect(() => {
    console.log(favorite);
  }, [favorite]);

  const handleRemove = id => {
    dispatch(removeProduct(id));
  };

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [carData, setcarData] = useState({});

  return (
    <>
      <ToastContainer />
      <ul className={css.ProductList}>
        {favorite.map(car => (
          <li key={car.id} className={css.ProductListItem}>
            <div className={css.imgWrapper}>
              <button
                type="button"
                className={css.addToCart}
                onClick={() => {
                  handleRemove(car.id);
                  Removed();
                }}
              >
                <SvgLikeActive />
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

      {favorite.length === 0 && <h2 className="Loading">Empty</h2>}

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
