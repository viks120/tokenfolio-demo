import React from 'react'
import CryptoDetails from './cryptoDetails';

interface Crypto {
    id: string,
    name: string
    symbol: string,
    current_price: number,
    market_cap: number,
    market_cap_rank: number
}

const CryptoTable = async () => {

const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-pro-api-key': 'CG-WvF433mHwYS1Vbbrm9JsH2pN'}
};


const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1',options);
const cryptos: Crypto[] = await res.json();


const res1 = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin`,options);
const crypto = await res1.json();

console.log(crypto);
    
  return (
    <>
    <div className="w-full flex justify-between items-center mb-3 mt-1 pl-3">

        <div className="ml-3">
            <div className="w-full max-w-sm min-w-[200px] relative">
            <div className="relative">
                <input
                className="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                placeholder="Search..."
                />
                <button
                className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded "
                type="button"
                >
                
                </button>
            </div>
            </div>
        </div>
    </div>

    <div className='grid grid-cols-2 gap-4'>

    <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
            <thead>
            <tr>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Name
                </p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Symbol
                </p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Market Cap
                </p>
                </th>
            </tr>
            </thead>
            <tbody>
            {cryptos.map((c: Crypto) => 
                <tr key={c.id}>
                    <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {c.name}
                    </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {c.symbol}
                    </p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {c.market_cap}
                    </p>
                    </td>
                </tr>
            )}
            </tbody>
        </table>
        </div>

        <div className="relative h-64 flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <CryptoDetails crypto={crypto} />
        </div> 
        </div> 
        </>
  )
}

export default CryptoTable
