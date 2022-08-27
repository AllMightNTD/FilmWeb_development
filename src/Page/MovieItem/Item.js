
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Col from 'react-bootstrap/Col';
import classnames from 'classnames/bind'
import style from './MovieItem.module.scss'

const cx = classnames.bind(style)

function MovieItem({data}) {
    return ( 
           <Col xl={3} lg={4} md={4} sm={6}>
             <div key={data.id} className = {cx("block_data")}> 
              <a className={cx('Link_image')} href= {`/MovieDetail/${data.slug}`}><img className={cx('image_movie')} src={data.image} alt={data.name}/></a>
              
              <a href={`/MovieDetail/${data.slug}`}>
                    <h3 className={cx('title_movie')}>{data.name}</h3>
              </a>
              <p>{data.description}</p>
            </div>
        </Col>
     );
}

export default MovieItem;