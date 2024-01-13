import { useState,useEffect} from 'react'
import axios from 'axios'
import './App.css'
import CryptoCard from './components/CryptoCard';
import CryptoCardWithoutRef from './components/CryptoCardWithoutRef';

function App() {
  const [cryptoData,setCryptoData]=useState([]);
  const [page,setPage]=useState(1);
  console.log('rendered');
  const config={
    headers:{'x-cg-demo-api':'CG-35kWwvoXmZbj1DBEczesw9HK'}
  }
  useEffect(()=>{
    getData()    
  },[page]);
  const changePage=()=>{
    setPage(prev=>prev+1);
  }
const getData=async ()=>{
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=CG-35kWwvoXmZbj1DBEczesw9HK`);
        console.log(response);
        setCryptoData(prev=>([...prev,...response.data]))
      } catch (error) {
        console.error(error);
      }
 }
  return (
    <>
    <div>Crypto Currency details{page}</div>
    <div className='cryptoContainer'>{cryptoData.map((crypto,index)=>{
      if(cryptoData.length==index+1){
        return <CryptoCard cryptoData={crypto} changePage={changePage} key={index}/>     
      }
      else{
        return <CryptoCardWithoutRef cryptoData={crypto} key={index}/>
      }
    })} </div>  
    </>
  )
}

export default App
