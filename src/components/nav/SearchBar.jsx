import React from 'react'
import { motion } from 'framer-motion'
import { search } from '../../assets'
import { Exitmenu } from '../../assets';


const SearchBar = ({ isSearchBarOpen, handleSearchClick }) => {
  return (
    <section>
        
        {/* Search Bar Popup */}
        {isSearchBarOpen && (
        <motion.div
            className="fixed inset-0 bg-primary z-50 flex items-start justify-center padding-x h-[25%]"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <div className="w-full max-w-[800px] mt-[50px]">
            {/* Exit button */}
            <img
                src={Exitmenu}
                alt="Exit Menu"
                className="w-[29px] h-[29px] cursor-pointer absolute right-[29%] top-[25%]"
                onClick={handleSearchClick}
            />

            {/* Heading */}
            <h1 className="text-[18px] xs:text-[36px] font-bold font-inter leading-[150%] text-flat mb-4">
                Search the website
            </h1>

            {/* Search input and button */}
            <div className="relative flex items-center w-full rounded-[6px] border border-black bg-flat h-[50px] overflow-hidden min-w-[250px]">
                <input
                id="search-bar"
                type="search"
                inputMode="text"
                placeholder="What would you like to find?"
                className="flex-1 h-full pl-4 text-normal-16 focus:outline-none text-ellipsis bg-flat overflow-hidden"
                />

                {/* Search button */}
                <button className="bg-flat h-full rounded-[6px] w-[60px] flexCenter focus:outline-none hover:bg-gray-200 transition-colors flex-shrink-0">
                <img
                    src={search}
                    alt="Search Icon"
                    className="w-[30px] h-[30px] cursor-pointer"
                />
                </button>
            </div>
            </div>
        </motion.div>
        )}
      
    </section>
  )
}

export default SearchBar
