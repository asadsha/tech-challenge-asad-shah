import React, { useState, useEffect } from 'react';
import { fetchCardsData } from '../../apis/cards';
import CardItem from './card';

const ResponsiveCardList = () => {
  const [name] = useState('Syed Asad Shah');
  const [purchaseCards, setPurchaseCards] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchCardsData();
        setData(fetchedData);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    getData();
  }, []);

  // Handle adding/removing cards purchase status
  const handlePurchasedCards = (id) => {
    // Check if id exists in array
    let newCards = [];
    if (purchaseCards.includes(id)) {
      // Remove string from array
      newCards = purchaseCards.filter((item) => item !== id);
    } else {
      // Add string to array
      newCards = [...purchaseCards, id];
    }
    setPurchaseCards([...newCards]);
    console.log(newCards);
  };

  return (
    <div className='container'>
      <h2 className='mt-4'>Responsive Card List - {`${name}`}</h2>
      {error && <div className='alert alert-danger'>{error}</div>}
      <div className='row py-4'>
        {data.map((card) => (
          // card component
          <CardItem
            card={card}
            purchaseCards={purchaseCards}
            handlePurchasedCards={handlePurchasedCards}
          />
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCardList;
