import React, {  useState } from 'react'
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import MovieCard from './Components/MovieCard';

const App = () => {

  const [allMovieData, setAllMovieData] = useState([]);
const [searchMovie, setSearchMovie] = useState('');
const [loading, setLoading] = useState(false);

const fetchMovieData = async () => {
  try {
      setLoading(true);
      const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=343110b0&s=${searchMovie}`);
      const data = await res.json();  
      setAllMovieData(data.Search);
      console.log(data.Search);
      setLoading(false)
  } catch (error) {
      console.log(error)
      setLoading(false)
  }
}




  return (

    <div>

      <Navbar />
      <div className="bg">
      <SearchBar  searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData} />
      <MovieCard allMovieData={allMovieData} loading={loading} />
      </div>
      
    </div>

  )
}

export default App
