import React from 'react'
import CoinRow from './CoinRow'

const titles = ['#', 'COIN', 'PRICE', 'PRICE CHANGE', '24H VOLUME']

const TableCoin = ({ coins, search }) => {

  const filteredCoins = coins.filter(
    (coin) => coin.name.toLoWerCase().includes(search.toLoWerCase())
  )

  return (
    <table className='table table-dark mt-5 table-hover'>
      <thead>
        <tr>
          {
            titles.map(title => (
              <th>{title}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          filteredCoins.map((coin, index) => (
            <CoinRow coin={coin} key={index} index={index + 1} />
          ))
        }
      </tbody>
    </table>
  )
}

export default TableCoin