import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './modal.module.css';
import { SvgLine } from 'project-folder/Svg';
import './modal.css';
export default function ModalW({ isOpenModal, setIsOpenModal, carData }) {
  const handleClose = () => setIsOpenModal(false);

  const minimumAgeMatch = carData.rentalConditions.match(/Minimum age: (\d+)/);
  const minimumAge = minimumAgeMatch ? minimumAgeMatch[1] : 21;
  const NewMileAge =
    String(carData.mileage).slice(0, 1) +
    ',' +
    String(carData.mileage).slice(1);

  return (
    <>
      <Modal
        show={isOpenModal}
        onHide={handleClose}
        // dialogClassName={css.Modal}
        aria-labelledby="example-custom-modal-styling-title"
        // centered
        // animation={true}
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body className={css.ModalB}>
          <div className={css.imgeWrapper}>
            <img
              src={carData.img}
              alt={carData.make + ' ' + carData.model}
              className={css.ModalImg}
            />
          </div>
          <div className={css.TitleContainer}>
            <h3 className={css.ProductItemTitle}>
              {carData.make}{' '}
              <span className={css.TitleModel}>{carData.model},</span>{' '}
              {carData.year}
            </h3>
          </div>
          <div className={css.TextContainer}>
            <p className={css.ProductInfo}>
              {carData.address.split(',').map(part => part.trim())[1]}
            </p>
            <SvgLine />
            <p className={css.ProductInfo}>
              {carData.address.split(',').map(part => part.trim())[2]}
            </p>{' '}
            <SvgLine />
            <p className={css.ProductInfo}>Id: {carData.id}</p> <SvgLine />
            <p className={css.ProductInfo}>Year: {carData.year}</p> <SvgLine />
            <p className={css.ProductInfo}>Type: {carData.type}</p>
            <p className={css.ProductInfo}>
              Fuel Consumption: {carData.fuelConsumption}
            </p>{' '}
            <SvgLine />
            <p className={css.ProductInfo}>Engine Size: {carData.engineSize}</p>
          </div>
          <p className={css.Description}>{carData.description}</p>
          <h4 className={css.SubTitleModal}>
            Accessories and functionalities:
          </h4>
          <div className={css.Accessories}>
            <p className={css.ProductInfo}>
              {carData.accessories.map(part => part.trim())[0]}
            </p>{' '}
            <SvgLine />
            <p className={css.ProductInfo}>
              {carData.accessories.map(part => part.trim())[1]}
            </p>{' '}
            <SvgLine />
            <p className={css.ProductInfo}>
              {carData.accessories.map(part => part.trim())[2]}
            </p>{' '}
          </div>{' '}
          <div className={css.Accessories}>
            {' '}
            <p className={css.ProductInfo}>
              {carData.functionalities.map(part => part.trim())[0]}
            </p>{' '}
            <SvgLine />
            <p className={css.ProductInfo}>
              {carData.functionalities.map(part => part.trim())[1]}
            </p>{' '}
            <SvgLine />
            <p className={css.ProductInfo}>
              {carData.functionalities.map(part => part.trim())[2]}
            </p>{' '}
          </div>{' '}
          <h4 className={css.SubTitleModal}>Rental Conditions: </h4>
          <div className={css.RentalConditions}>
            <p className={css.Condition}>
              {/* {carData.rentalConditions.split('\n')[0]} */}
              Minimum age:{' '}
              <span className={css.ConditionValue}>{minimumAge}</span>
            </p>{' '}
            <p className={css.Condition}>
              {/* {carData.rentalConditions.split('\n')[0]} */}
              Valid driver’s license{' '}
            </p>
            <p className={css.Condition}>
              {carData.rentalConditions.split('\n')[2]}
            </p>
            <p className={css.Condition}>
              Mileage: <span className={css.ConditionValue}> {NewMileAge}</span>
            </p>
            <p className={css.Condition}>
              Price:{' '}
              <span className={css.ConditionValue}> {carData.rentalPrice}</span>
            </p>
          </div>
          <a
            href="tel:+380730000000"
            type="button"
            className={css.Rental}
            variant="secondary"
            onClick={handleClose}
          >
            Rental car
          </a>
        </Modal.Body>
      </Modal>
    </>
  );
}
