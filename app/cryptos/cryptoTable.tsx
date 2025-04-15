'use client'
import React, { useEffect, useState } from 'react'
import CryptoDetails from './cryptoDetails';
import SearchBar from './searchBar';

interface Crypto {
    id: string,
    name: string
    symbol: string,
    current_price: number,
    market_cap: number,
    market_cap_rank: number
}

const CryptoTable =  () => {

    const [cryptos,setCryptos] = useState<Crypto[]>([])
    const [searchText,setSeachText] = useState('')
    const [selectedCrypto, setSelectedCrypto] = useState(null)
    const [isModal, setIsModal] = useState(false)

    useEffect(() => {

        const fetchData = async () =>{
            const api_url = '/api/crypto';
            const res = await fetch(api_url);
            const data: Crypto[] = await res.json();
            setCryptos(data);
            console.log(data)
        }

        fetchData();
        
    },[]);


    const clickHandler = (c:any) => {
        setSelectedCrypto(c);
        setIsModal(true);
    }

    const filteredCryptos = cryptos.filter((c)=> {
        return searchText === '' || c.name.toLowerCase().includes(searchText.toLowerCase());
    })

    const closeModalBox = () => {
        setIsModal(false);
        setSelectedCrypto(null);
    }
    
    return (
    <>
    <SearchBar value={searchText} onChange={setSeachText} />

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
                    Market Cap
                </p>
                </th>
            </tr>
            </thead>
            <tbody>
            {filteredCryptos.map((c: Crypto) => 
                <tr key={c.id} onClick={() => clickHandler(c)}>
                    <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {c.name} 
                        
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

    {isModal && selectedCrypto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-lg">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={closeModalBox}
                >
                    ✖
                </button>
                <CryptoDetails crypto={selectedCrypto} />
            </div>
        </div>
    )}

    {/*selectedCrypto ? (<CryptoDetails crypto={selectedCrypto} />) : <div></div>*/}  
    </>
  )
}

export default CryptoTable
