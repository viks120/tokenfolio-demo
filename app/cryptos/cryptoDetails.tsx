import React from 'react'

const CryptoDetails = ({crypto}:any) => {

  return (
    <div className="relative h-32 flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
      <div className="p-4">
          <h6 className="mb-2 text-slate-800 text-xl font-semibold">
          {crypto.name} ({crypto.symbol})
          </h6>
          <p className="text-slate-600 leading-normal font-light">
          Current Price: {crypto.current_price}
          </p>
      </div>
    </div>
  )
}

export default CryptoDetails
