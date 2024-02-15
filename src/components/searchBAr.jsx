
import { useContext, useState } from "react";
import searchIcon from "../assets/icons/search.svg"
import { NewsContext } from "../context/NewsContext";
const SearchBAr = () => {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
   const {setSearchQuery}=useContext(NewsContext)
  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      const context = this;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(context, args), delay);
    };
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    debouncedHandleInputChange(value);
  };

  // Function to handle input change with debounce
  const debouncedHandleInputChange = debounce((value) => {
    // This function will be called only after a certain delay (e.g., 300ms) 
    // after the user stops typing
    setSearchQuery(value)
    console.log("Input value after debounce:", value);
    // Perform any action needed after debounce, such as making an API call
  }, 300);
  return (
    <div className="flex items-center space-x-3 lg:space-x-8">
                    <div>
                       {open&& <input value={inputValue} onChange={handleInputChange} className="border-b-[1px] border-black outline-none" type="text" placeholder="Search news"/>}
                    </div>
                    <img onClick={()=>setOpen(prev=>!prev)} src={searchIcon} />
                </div>
  )
}

export default SearchBAr