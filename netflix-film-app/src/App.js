


import './App.css';
import Header from "./Components/Header/Header"; 
import "./Components/Rows/Row/row.css";
import "./index.css"
import requests from "./Components/utils/requests";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Layout from './Components/Layout/Layout'; 

import Trending from './Components/Rows/Row/Trending';
import TopRated from './Components/Rows/Row/TopRated';
import ActionMovie from './Components/Rows/Row/ActionMovie';
import ComedyMovie from './Components/Rows/Row/ComedyMovie';
import HorrorMovie from './Components/Rows/Row/HorrorMovie';
import RomanceMovie from './Components/Rows/Row/RomanceMovie';
import TvShow from './Components/Rows/Row/TvShow';
import Documentaries from './Components/Rows/Row/Documentaries';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/" element={<Layout />}> 
            
            <Route index element={<Trending title="Trending Now" 
                  fetchUrl={requests.fetchTrending}/>} /> 
                  
            <Route path="/Rows/Row/Trending" element={<Trending title="Trending Now" 
                  fetchUrl={requests.fetchTrending}/>} />
            <Route path="/Rows/Row/TopRated" element={<TopRated title="Top Rated" 
                  fetchUrl={requests.fetchTopRatedMovies}/>} />
            <Route path="/Rows/Row/ActionMovie" element={<ActionMovie title="ActionMovie" 
                  fetchUrl={requests.fetchActionMovies} />} />
            <Route path="/Rows/Row/ComedyMovie" element={<ComedyMovie title="Comedy Movies" 
                  fetchUrl={requests.fetchComedyMovies}/>} />
            <Route path="/Rows/Row/HorrorMovie" element={<HorrorMovie title="Horror Movies" 
                  fetchUrl={requests.fetchHorrorMovies}/>} />
            <Route path="/Rows/Row/RomanceMovie" element={<RomanceMovie title="Romance Movies" 
                  fetchUrl={requests.fetchRomanceMovies}/>} />
            <Route path="/Rows/Row/TvShow" element={<TvShow title="TV Shows" 
                  fetchUrl={requests.fetchTvShow}/>} />
            <Route path="/Rows/Row/Documentaries" element={<Documentaries title="Documentaries" 
                  fetchUrl={requests.fetchDocumentaries}/>} />

            <Route path="/Rows/Row/Trending" element={<Trending/>} />
            <Route path="/Rows/Row/TopRated" element={<TopRated />} />
            <Route path="/Rows/Row/ActionMovie" element={<ActionMovie />} />
            <Route path="/Rows/Row/ComedyMovie" element={<ComedyMovie />} />
            <Route path="/Rows/Row/HorrorMovie" element={<HorrorMovie />} />
            <Route path="/Rows/Row/RomanceMovie" element={<RomanceMovie />} />
            <Route path="/Rows/Row/TvShow" element={<TvShow />} />
            <Route path="/Rows/Row/Documentaries" element={<Documentaries />} />


          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;