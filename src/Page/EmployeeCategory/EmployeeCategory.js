import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import MovieItem from '../MovieItem/Item';
import { useParams } from 'react-router-dom';
import style from './EmployeeCategory.module.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function EmployeeCategory() {
    const cx = classnames.bind(style);
    const params = useParams();
    const { category } = params;
    console.log(category);
    const [dataFilm, setDataFilm] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:4100/me/${category}`)
            .then((response) => setDataFilm(response ? response.data : []))
            .catch((error) => console.log(error));
    }, []);
    console.log(dataFilm);
    return (
        <div className={cx('container')}>
            <Container fluid="xl" className={cx('mt-2', 'ml-2')}>
                <Row>
                    {dataFilm.map((item, index) => (
                        <MovieItem key={index} data={item} />
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default EmployeeCategory;
