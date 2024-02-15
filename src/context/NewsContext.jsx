/* eslint-disable react/prop-types */
import { createContext } from "react";
import useNewsQuery from "../hooks/useNewsQuery";

export const  NewsContext = createContext();



export const NewsProvider = ({ children }) => {
    const {news, setCategoryAndFetch, setSearchQueryAndFetch}=useNewsQuery()
    return (
        <NewsContext.Provider value={{news,setCategoryAndFetch,setSearchQueryAndFetch}}>
            {children}
            </NewsContext.Provider>
    );
}

