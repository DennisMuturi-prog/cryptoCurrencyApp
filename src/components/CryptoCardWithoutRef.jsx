import React from 'react'
import { useState } from 'react';

const CryptoCardWithoutRef = ({cryptoData}) => {
  const [more,setMore]=useState(false);
  const handleButtonClick=()=>{
        setMore(prev=>!prev);
    }
  return (
    <div >
        <h1>{cryptoData.name} {cryptoData.symbol}</h1>
        <div><img src={cryptoData.image} alt=""/></div>
        <p>${cryptoData.current_price}</p>
        <button onClick={handleButtonClick}>More Details</button>
        {more && <div>
            <p>total Supply:{cryptoData.total_supply}</p>
            <p>total Volume:{cryptoData.total_volume}</p>
            <p>Price change percentage in 24hours:{cryptoData.price_change_percentage_24h}</p>
        </div>}
    </div>
  );
}

export default CryptoCardWithoutRef