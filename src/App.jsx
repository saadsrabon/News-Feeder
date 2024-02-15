import useNewsQuery from "./hooks/useNewsQuery";
import Footer from "./shared/Footer";
import Header from "./shared/Header";


function App() {
  const {news}=useNewsQuery()

  return (
    <>
    <Header/>
      <main className="my-10 lg:my-14">
       
        <div className="container mx-auto grid grid-cols-12 gap-8">
          {/* <!-- left --> */}
          <div  className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
           {
            news.filter((i,index)=>index%2==0).map((item)=>(
              <div key={item?.source?.id} className="col-span-12 grid grid-cols-12 gap-4">
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
                <p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
              </div>
              {/* <!-- thumb --> */}
              <div className="col-span-12 lg:col-span-8">
              {item?.urlToImage &&   <img className="w-full" src={item?.urlToImage} alt="thumb" />}
                <p className="mt-5 text-base text-[#5C5955]">
                 {item?.author}
                </p>
              </div>
              </div>
            )
            )
            }
            
            
            




            {/* <!-- news item --> */}
           
            {/* <!-- news item ends --> */}
            {/* <!-- news item --> */}
          
          </div>
          {/* <!-- right --> */}
          <div className="col-span-12 self-start xl:col-span-4">
            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
              {/* <!-- news item --> */}

              {
                news.filter((i,index)=>index%2==!0).map((item)=>(
                  <div key={item?.source?.id} className="col-span-12 mb-6 md:col-span-8">
                  {item?.urlToImage &&   <img className="w-full" src={item?.urlToImage} alt="thumb" />}
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
                    <p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
                  </div>
                </div>
                )
                )
              }
             
              {/* <!-- news item ends --> */}
           
             
              
              
              {/* <!-- news item ends --> */}
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default App;
