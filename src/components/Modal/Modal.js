import React from 'react';
import { useHistory } from 'react-router-dom';

const Modal = ({ handleModalFunct, message, historyPushLink }) => {

    console.log('modal triggered')
    let history = useHistory();

    const onClickModal = () => {
        handleModalFunct(false);
        history.push(historyPushLink);
    }


    return (
        <div className="modal">
            <div className="modal__display">
                <div className="modal__display__content">
                    <h1>Success!</h1>
                    <p>You have successfully created your {message}. It is live and ready to be viewed. Thank for using BidHub! </p>
                    <button className = "submit-btn modal__btn" onClick={onClickModal}>Go to your {message}s!</button>
                </div>

            </div>

        </div>
    )
}

export default Modal;