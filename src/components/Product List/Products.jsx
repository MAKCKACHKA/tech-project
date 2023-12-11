import React, { useEffect, useState } from 'react';

import css from './products.module.css';
import { useDispatch, useSelector } from 'react-redux';

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
import { fetchCars } from 'redux with mockapi/operations';

const Added = () => toast('Car added to favorites!');
const Removed = () => toast('Car removed from favorites!');

export default function Products() {
  const adverts = useSelector(selectAdverts);
  const favorite = useSelector(selectFavorite);

  // let advertsArray = adverts;

  // useEffect(() => {
  //   console.log(advertsArray);
  // }, [advertsArray]);

  // const Upload = data => {
  //   advertsArray = [...advertsArray, ...data];
  //   console.log(data);
  // };

  const [page, setPage] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [carData, setcarData] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const handleAdd = product => {
    dispatch(addProduct(product));
  };
  const handleRemove = id => {
    dispatch(removeProduct(id));
  };

  useEffect(() => {
    setAllAdverts(adverts);
  }, [adverts]);

  const [allAdverts, setAllAdverts] = useState(adverts); // Додано стан для збереження всіх оголошень
  useEffect(() => {
    // При завантаженні нової сторінки додаємо оголошення до загального списку
    // setTimeout(() => {
    //   setAllAdverts(prevAdverts => [...prevAdverts, ...adverts]);
    // }, 10);
    // console.log(allAdverts);
  }, [adverts]);

  const loadMore = async () => {
    setPage(page + 1);
    setTimeout(() => {
      setAllAdverts(prevAdverts => [...adverts, ...prevAdverts]);
    }, 40);
    // Upload(adverts);
    // console.log(advertsArray);
    // await fetchCars(page);
  };

  return (
    <>
      <ToastContainer />
      <ul className={css.ProductList}>
        {/* {allAdverts.map(car => ( */}
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
                  // console.log(isOpenModal, carData);
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
    </>
  );
}
