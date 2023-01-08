
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterAmeen from './components/FooterAmeen';
import MovieDetails from './components/MovieDetails';
import MoviesList from './components/MoviesList';
import NavBar from './components/NavBar';

function App() {

  const [movies,setMovies]=useState([])
  const [pageCount,setPageCount]=useState(0)
  const getMoviesData= async() =>{
    const res= await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c2efd827c0e6b470d3a503e547027ec6&language=ar")
    setMovies(res.data.results)
    setPageCount(res.data.total_pages);
  }

  useEffect(()=>{
  getMoviesData()
  },[])

  const search = async(word) =>{
    if(word===""){
      getMoviesData()
    }else{
    const res= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c2efd827c0e6b470d3a503e547027ec6&query=${word}&language=ar`)
    setMovies(res.data.results)
    setPageCount(res.data.total_pages);
    }
  }

  const PagenationList = async (word) =>{
    const res= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c2efd827c0e6b470d3a503e547027ec6&language=ar&page=${word}`)
    setMovies(res.data.results)
    setPageCount(res.data.total_pages);

  }
  return (
    <div className="font color-body">
 
      <NavBar search={search} />
      <Container >
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<MoviesList movies={movies} PagenationList={PagenationList} pageCount={pageCount} />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
     
        </Routes>
      </BrowserRouter>
      </Container>
      <FooterAmeen />
    </div>
  );
}

export default App;
