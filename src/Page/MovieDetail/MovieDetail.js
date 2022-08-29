import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './MovieDetail.module.scss';
import classNames from 'classnames';

const cx = classNames.bind(style);

function MovieDetail() {
    const params = useParams();
    const { slug } = params;

    const [dataFilm, setDataFilm] = useState({});
    useEffect(() => {
        axios
            .get(`http://localhost:4100/employee/${slug}`)
            .then((response) => setDataFilm(response ? response.data : []))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={cx('DetailFilm')}>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${dataFilm.videoID}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <h3 className="name">{dataFilm.name}</h3>
            <p className="name">{dataFilm.description}</p>
        </div>
    );
}

export default MovieDetail;
