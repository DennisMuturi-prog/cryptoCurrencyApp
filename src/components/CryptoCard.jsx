import { useEffect, useRef, useState } from "react"

const CryptoCard = ({cryptoData,changePage}) => {
    const [more,setMore]=useState(false);
    const observedNode=useRef();
    const handleButtonClick=()=>{
        setMore(prev=>!prev);
    }
    useEffect(()=>{
        const observer=new IntersectionObserver(entries=>{
        const entry=entries[0];
        if(entry.isIntersecting){
            changePage();
        }
    });
    observer.observe(observedNode.current);
    },[]);
    console.log(observedNode.current);
  return (
    <div ref={observedNode} >
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

export default CryptoCard