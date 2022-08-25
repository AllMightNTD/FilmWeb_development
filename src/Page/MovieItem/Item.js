
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Col from 'react-bootstrap/Col';
import InsideMovie from "./InsideMovie";


function MovieItem({data}) {
    return ( 
           <Col xl={3} lg={4} md={4} sm={6}>
             <div key={data.id} className = "block_data"> 
              <a href= {data.slug}><img className="image_movie" src={data.image} alt={data.name}/></a>
              
              <a>
                    <h3 className="title_movie">{data.name}</h3>
              </a>
              <p>{data.description}</p>
            </div>
        </Col>
     );
}

export default MovieItem;