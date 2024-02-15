/* eslint-disable react/prop-types */
import { createContext } from "react";
import useNewsQuery from "../hooks/useNewsQuery";

export const  NewsContext = createContext();



export const NewsProvider = ({ children }) => {
    const {news, setCategoryAndFetch, setSearchQueryAndFetch,setSearchQuery ,searchQuery}=useNewsQuery()
    return (
        <NewsContext.Provider value={{news,setCategoryAndFetch,setSearchQuery, setSearchQueryAndFetch,searchQuery}}>
            {children}
            </NewsContext.Provider>
    );
}

