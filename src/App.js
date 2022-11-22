
import './App.css';
import axios from 'axios';
//Routing//
import {Routes,Route} from "react-router-dom";


//react slick css//
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//pages//
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import Plays from "./pages/Play.page";


axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params['api_key'] = '0931d99ee9a97cf63bc8bdb451859024';
;

function App() {
  return( 
      <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/movie/:id" element={<MoviePage />}/>
    <Route path="/plays" element={<Plays />}/>

  
  
  
    </Routes> 
    );
  };

export default App;
