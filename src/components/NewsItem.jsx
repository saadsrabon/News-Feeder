/* eslint-disable react/prop-types */

import {formatTimestamp, } from "../utilities/utilities"


const NewsItem = ({item}) => {
  return (
    // col-span-12 grid grid-cols-12 gap-4
    <div className="col-span-12 mb-6 md:col-span-8">
    {item?.urlToImage!==null &&   <img className="w-full" src={item?.urlToImage} alt="thumb" />}
    {/* <!-- info --> */}
    <div className="col-span-12 mt-6 md:col-span-4">
      <a href="#">
        <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
         {item?.title}
        </h3>
      </a>
      <p className="text-base text-[#292219]">
      {item?.description}
      </p>
      <p className="mt-5 text-base text-[#94908C]">{item?.publishedAt?formatTimestamp(item?.publishedAt):""}</p>
    </div>
  </div>
  )
}

export default NewsItem