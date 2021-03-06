import React, { useState, useContext, Fragment } from 'react';
import { AuthContext } from '../../shared/context/auth-context';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
import './PlaceItem.css';

const PlaceItem = (props) => {
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log('DELETING');
  };

  return (
    <Fragment>
      <Modal
        show={showMap}
        onCancel={() => setShowMap(false)}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={() => setShowMap(false)}>CLOSE</Button>}
      >
        <div className="map-container">
          <p style={{ color: 'red' }}>
            Not impleted because google maps API needs acredit card!
          </p>
          <Map coordinates={props.coordinates} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={() => setShowConfirmModal(false)}
        header="Are you sure?"
        footerClass="place-item__model-actions"
        footer={
          <Fragment>
            <Button onClick={() => setShowConfirmModal(false)} inverse>
              CANCEL
            </Button>
            <Button onClick={() => confirmDeleteHandler()} danger>
              DELETE
            </Button>
          </Fragment>
        }
      >
        <p>
          Do you really want to proceed? Please note that it can't be undone
          thereafter.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            {/* map-container future */}
            <Button onClick={() => setShowMap(true)} inverse>
              VIEW ON MAP
            </Button>
            {auth.isLoggedIn && (
              <Button to={`/places/${props.id}`}>EDIT</Button>
            )}
            {auth.isLoggedIn && (
              <Button onClick={() => setShowConfirmModal(true)} danger>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </Fragment>
  );
};

export default PlaceItem;
