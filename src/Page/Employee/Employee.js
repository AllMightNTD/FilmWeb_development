import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import MovieItem from '../MovieItem/Item';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function Employee() {

  const [data , setData] = useState([])
  
    useEffect(() => {
     axios.get('http://localhost:2345')
      .then(response =>setData(response ? response.data: []))
      .catch(function (error) {
     // handle error
      console.log(error);
    }
      )
 
  },[])
    return (
      <Container fluid="xl" className='mt-5'>
      <Row>
   {
    data.map((item , index) => (
          <MovieItem key={index} data = {item}/>
     ))
   }
  </Row>
</Container>
      );
}

export default Employee;