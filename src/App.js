import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import TableCoin from './components/TableCoin';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getData();
  }, [])


  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1');
    console.log(res.data);
    setCoins(res.data);
  }

  return (

    <div className='container'>
      <div className='row'>
        <h1>BITCOINS MARKET</h1>
      </div>
      <div className='row'>
        <input
          type='text' 
          placeholder='Search coin...'
          className='form-control bg-dark text-light border-0 mt-4 text-center' 
          onChange={e => setSearch(e.target.value)} />
        <TableCoin coins={coins} search={search}/>
      </div>
    </div>
  );
}

export default App;
