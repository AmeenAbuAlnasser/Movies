
import React from "react";
import { Col, Row } from "react-bootstrap";
const CardMovie = ({mov}) => {
  return (
  <>
    {mov.poster_path !== null ? (  
        <Col xs="6" sm="6" md="4" lg="3" className="my-1">
        <div className="card">
          <img src={`https://image.tmdb.org/t/p/w500/`+mov.poster_path} className="card__image" alt="hu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>اسم الفيلم : {mov.title}</p>
              <p>تاريخ الاصدار: {mov.release_date}</p>
              <p>عدد المقيمين: {mov.vote_count}</p>
              <p>التقييم: {mov.vote_average} </p>
            </div>
          </div>
        </div>
         </Col>
     ) :null}
       
   </>

  );
};

export default CardMovie;