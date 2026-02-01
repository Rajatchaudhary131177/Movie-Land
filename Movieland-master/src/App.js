import { useEffect,useState } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=e1bc14b4';  
const movie = {
    "Title" :"Amazing Spiderman Syndrome",
    "Year" :"2012",
    "imdbID" : "tt2586634",
    "Type" : "movie",
    "Poster" : "N/A"
}

const App = () =>{
    const [movies, setMovies] =  useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    async function searchMoives(title) {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(()=>{ 
        searchMoives('Batman');
    },[]);
    return (
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input  placeholder='Search for movies' value={searchTerm} onChange={(movie)=> setSearchTerm(movie.target.value) }/>
                <img src={SearchIcon} alt='search' onClick={()=> searchMoives(searchTerm)}/>
            </div>
            {
            movies?.length>0
                ?(
            <div className='container'>
                {movies.map((movie) =>(
                    <MovieCard movie={movie}/>
                ))}
            </div>
                ) :(
                    <div className='empty'>
                    <h2>No moives found</h2> 
                    </div>    
                ) 
            }
        </div>
    );
}

export default App;