import React from 'react'
import CardMovie from './CardMovie'
import { Row } from 'react-bootstrap';
import PaginationComponent from './Pagination';


function MoviesList({movies,PagenationList,pageCount}) {
  return (
    <>
    <Row className='mt-3 '>

   {movies.length >=1 ? (movies.map((mov)=>{
    return(
      
      <CardMovie mov={mov} key={mov.id}/> 

     
    )
   })) : <h2 className='text-center my-5'>لا يوجد افلام </h2>}
  
    </Row>
      
     <PaginationComponent PagenationList={PagenationList} pageCount={pageCount}/>
 </>
  )

 
}

export default MoviesList
