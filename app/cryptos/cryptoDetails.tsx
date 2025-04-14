import React from 'react'

const CryptoDetails = ({crypto}:any) => {
  return (
    <div className="p-4">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
        {crypto.name} {crypto.symbol}
        </h6>
        <p className="text-slate-600 leading-normal font-light">
        {crypto.market_data.current_price.usd}
        </p>
    </div>
  )
}

export default CryptoDetails
