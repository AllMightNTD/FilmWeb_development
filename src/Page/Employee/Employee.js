import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieItem from '../MovieItem/Item';
import classnames from 'classnames/bind';
import style from './Employee.module.scss';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Employee() {
    const cx = classnames.bind(style);
    const [data, setData] = useState([]);

    const link = `http://localhost:4100`;

    useEffect(() => {
        axios
            .get(link)
            .then((response) => setData(response ? response.data : []))
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    return (
        <div className={cx('container')}>
            <Container fluid="xl" className={cx('mt-2', 'container_content')}>
                <Row className={cx('Row_content')}>
                    {data.map((item, index) => (
                        <MovieItem key={index} data={item} />
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Employee;
