
import { useContext } from "react";
import { NewsContext } from "./context/NewsContext";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import NewsItem from "./components/NewsItem";
import NewsItemLeft from "./components/NewsItemLeft";


function App() {
  const {news}=useContext(NewsContext)

  return (
    <>

    <Header/>
      <main className="my-10 lg:my-14">
       
        <div className="container mx-auto grid grid-cols-12 gap-8">
          {/* <!-- left --> */}
          <div  className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
           {
           news?.length>0? news.filter((i,index)=>index%2==0).map((item ,index)=>(
              <NewsItemLeft item={item} key={index} />
            )
            ):<h1>Loading...</h1>
            }
            
          
          </div>
          {/* <!-- right --> */}
          <div className="col-span-12 self-start xl:col-span-4">
            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
              {/* <!-- news item --> */}

              {
                news?.filter((i,index)=>index%2==!0).map((item,i)=>(
                 <NewsItem item={item}  key={i} />
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
