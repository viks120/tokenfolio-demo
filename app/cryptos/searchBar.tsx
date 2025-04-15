import React from 'react'

const SearchBar = (props:any) => {
  return (
    <div className="w-full max-w-sm min-w-[200px] relative">
        <div className="relative">
            <input
                type="text"
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
                className="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                placeholder="Search..."
            />
            <button
                className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded"
                type="button"
            >
            </button>
        </div>
    </div>
  )
}

export default SearchBar
