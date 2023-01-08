
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import MoviesList from './components/MoviesList';
import NavBar from './components/NavBar';

function App() {

  const [movies,setMovies]=useState([])
  const getMoviesData= async() =>{
    const res= await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c2efd827c0e6b470d3a503e547027ec6&language=en-US")
    setMovies(res.data.results)
  }

  useEffect(()=>{
  getMoviesData()
  },[])

  const search = async(word) =>{
    if(word===""){
      getMoviesData()
    }else{
    const res= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c2efd827c0e6b470d3a503e547027ec6&query=${word}&language=en-US`)
    setMovies(res.data.results)
    }
  }
  return (
    <div className="font color-body">
 
      <NavBar search={search} />
      <Container >
        <MoviesList movies={movies}/>
      </Container>
    </div>
  );
}

export default App;
