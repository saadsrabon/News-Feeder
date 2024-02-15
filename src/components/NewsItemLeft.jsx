/* eslint-disable react/prop-types */

import {formatTimestamp } from "../utilities/utilities"


const NewsItemLeft = ({item}) => {
  return (
    <div  className="col-span-12 grid grid-cols-12 gap-4 ">
    {/* <!-- info --> */}
    <div className="col-span-12 lg:col-span-4">
      <a href="#">
        <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
         {item?.title}
        </h3>
      </a>
      <p className="text-base text-[#5C5955]">
        {item?.description}
      </p>
      <p className="mt-5 text-base text-[#5C5955]">{item?.publishedAt?formatTimestamp(item?.publishedAt):""}</p>
    </div>
    {/* <!-- thumb --> */}
    <div className="col-span-12 lg:col-span-8">
    {item?.urlToImage!==null &&   <img className="w-full" src={item?.urlToImage} alt="thumb" />}
      <p className="mt-5 text-base text-[#5C5955]">
       {item?.author}
      </p>
    </div>
    </div>
  )
}

export default NewsItemLeft