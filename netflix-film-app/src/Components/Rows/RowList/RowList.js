import requests from "../../utils/requests";

import Trending from "../Row/Trending";
import TopRated from "../Row/TopRated";
import ActionMovie from "../Row/ActionMovie";
import ComedyMovie from "../Row/ComedyMovie";
import HorrorMovie from "../Row/HorrorMovie";
import RomanceMovie from "../Row/RomanceMovie";
import TvShow from "../Row/TvShow";
import Documentaries from "../Row/Documentaries";

const RowList = () => {
    return (
        <>
            {/* <Trending 
          title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginal} 
                islargeRow={true}/> */}

             < Trending title="Trending Now" 
             fetchUrl={requests.fetchTrending} /> 
             
             <ActionMovie title="ActionMovie" 
             fetchUrl={requests.fetchActionMovies} />

             <TopRated title="Top Rated" 
             fetchUrl={requests.fetchTopRatedMovies} />
            
             <ComedyMovie title="Comedy Movies" 
             fetchUrl={requests.fetchComedyMovies} />

            <HorrorMovie title="Horror Movies" 
             fetchUrl={requests.fetchHorrorMovies} />

               <RomanceMovie title="Romance Movies" 
             fetchUrl={requests.fetchRomanceMovies} />

            <TvShow title="TV Shows" 
             fetchUrl={requests.fetchTvShow} />
            
             <Documentaries title="Documentaries" 
             fetchUrl={requests.fetchDocumentaries} />
            

            
        </>
    )
}



export default RowList;