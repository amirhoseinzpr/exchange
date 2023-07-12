import React, { useEffect, useState } from 'react';
import { getCoin } from '../servises/api';
import Loader from './Loader';
import Coin from './Coin';
import styles from './Landing.module.css'

const Landing = () => {

    const [coin , setCoin] = useState([])
    const [search , setSearch] = useState("")

    useEffect(() => {
        const fetchAPI = async() => {
            const data = await getCoin();
            setCoin(data)
        } 
            fetchAPI();
    },[])

    const changeHandeler = (event) => {
        setSearch(event.target.value)
    }
    const searchCoin = coin.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
          <input className={styles.input} type='text' placeholder='Search' value={search} onChange={changeHandeler} />
          {
            coin.length ?
            <div className={styles.coinContainer}>
                {searchCoin.map(coin =>  <Coin
                    key = {coin.id}
                    name = {coin.name}
                    image = {coin.image}
                    symbol = {coin.symbol}
                    price = {coin.current_price}
                    marketCap = {coin.market_cap}
                    priceChange = {coin.price_change_percentage_24h}
                />)}
            </div>
            : <Loader/>
          }  
        </>
    );
};

export default Landing;