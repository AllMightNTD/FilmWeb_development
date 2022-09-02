import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import classnames from 'classnames/bind';
import style from './MovieItem.module.scss';

const cx = classnames.bind(style);

function MovieItem({ data }) {
    return (
        <Col xl={3} lg={3} md={3} sm={4} xs={12} className={cx('col_item')}>
            <div key={data.id} className={cx('block_data')}>
                <Link className={cx('Link_image')} to={`/MovieDetail/${data.slug}`}>
                    <img className={cx('image_movie')} src={data.image} alt={data.name} />
                </Link>

                <div className={cx('info_movie')}>
                    <Link to={`/MovieDetail/${data.slug}`} style={{ textDecoration: 'none' }}>
                        <h3 className={cx('title_movie')}>{data.name}</h3>
                    </Link>
                    <p className={cx('description_movie')}>{data.description}</p>
                </div>
            </div>
        </Col>
    );
}

export default MovieItem;
