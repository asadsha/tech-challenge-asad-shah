import React from 'react';
import Button from '../../helperComponents/Button';
import { formatDate, truncateText } from '../../utils';

const CardItem = ({ card, handlePurchasedCards, purchaseCards }) => {
  return (
    <div className='col-md-3' key={card.id}>
      <div className='card mb-4'>
        {/* Card image */}
        <img
          src={card.image}
          className='card-img-top'
          height='150px'
          alt='Card'
        />
        <div className='card-body d-flex flex-column'>
          {/* Card title and available credits */}
          <div className='d-flex justify-content-between align-items-start'>
            <span className='card-title text-capitalize h6'>
              {truncateText(card.name, 25)}
            </span>
            <p className='small'>{`${card.available_credits} credits`}</p>
          </div>
          {/* Button for purchase and card start date */}
          <div className='d-flex justify-content-between align-items-start'>
            <Button
              title={purchaseCards.includes(card.id) ? 'Purchased' : 'Purchase'}
              color={purchaseCards.includes(card.id) ? 'Red' : 'Green'}
              onClick={() => handlePurchasedCards(card.id)}
            />
            <p className='card-title small'>{formatDate(card.start_date)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
