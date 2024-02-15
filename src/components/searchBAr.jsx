
import { useContext, useState } from "react";
import searchIcon from "../assets/icons/search.svg"
import { NewsContext } from "../context/NewsContext";
const SearchBAr = () => {
    const [inputValue, setInputValue] = useState('');
   const {setSearchQueryAndFetch}=useContext(NewsContext)
   console.log(setSearchQueryAndFetch)
  // Debounce function


  // Function to handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchQueryAndFetch(value);
   
  };

  // Function to handle input change with debounce

  return (
    <div className="flex items-center space-x-3 lg:space-x-8">
                    <div>
                        <input value={inputValue} onChange={handleInputChange} className="border-b-[1px] border-black outline-none" type="text" placeholder="Search news"/>
                    </div>
                    <img src={searchIcon} />
                </div>
  )
}

export default SearchBAr