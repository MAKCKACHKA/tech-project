import React, { useEffect, useState } from 'react';

import css from './products.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  selectAdverts,
  selectFavorite,
  selectIsLoading,
} from 'redux with mockapi/adverts/selesctors';
import {
  addProduct,
  removeProduct,
} from 'redux with mockapi/adverts/favoriteSlice';
import { SvgLike, SvgLikeActive, SvgLine } from 'project-folder/Svg';
import ModalW from 'components/Modal/Modal';
import { fetchCars, fetchFiltered } from 'redux with mockapi/operations';

const Added = () => toast('Car added to favorites!');
const Removed = () => toast('Car removed from favorites!');

export default function Products({ isFiltered, filtered }) {
  const adverts = useSelector(selectAdverts);
  const favorite = useSelector(selectFavorite);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (filtered.length !== 0) {
      console.log(...filtered);
    }
  }, [filtered]);

  const [page, setPage] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [carData, setcarData] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (isFiltered) {
      setTimeout(() => {
        dispatch(fetchFiltered());
        console.log(isFiltered);
        setPage(3);
      }, 100);
    }
  }, [dispatch, isFiltered]);

  const handleAdd = product => {
    dispatch(addProduct(product));
  };
  const handleRemove = id => {
    dispatch(removeProduct(id));
  };

  useEffect(() => {
    console.log(adverts);
  }, [adverts]);

  const loadMore = async () => {
    setPage(page + 1);
  };

  return (
    <>
      {!isLoading ? (
        <div className={css.container}>
          <ToastContainer />
          <ul className={css.ProductList}>
            {(isFiltered ? filtered : adverts).map(car => (
              <li key={car.id} className={css.ProductListItem}>
                <div className={css.imgWrapper}>
                  {!favorite.some(item => item.id === car.id) ? (
                    <button
                      type="button"
                      className={css.add}
                      onClick={() => {
                        handleAdd(car);
                        Added();
                      }}
                    >
                      <SvgLike />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className={css.add}
                      onClick={() => {
                        handleRemove(car.id);
                        Removed();
                      }}
                    >
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
                    }}
                  >
                    Learn more
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {page !== 3 && (
            <button
              type="button"
              className={css.LoadMore}
              onClick={() => {
                loadMore();
                // console.log(adverts);
              }}
            >
              Load more
            </button>
          )}{' '}
          {isOpenModal && (
            <ModalW
              isOpenModal={isOpenModal}
              setIsOpenModal={setIsOpenModal}
              carData={carData}
            />
          )}
        </div>
      ) : (
        <h2 className="Loading">Loading...</h2>
      )}
      {isFiltered & (filtered.length === 0) && (
        <h2 className="Loading">Not found</h2>
      )}
    </>
  );
}
