import Table from 'react-bootstrap/Table';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import classnames from 'classnames/bind';
import style from './ListEmployee.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function ListEmployee() {
    const cx = classnames.bind(style);
    const [dataFilm, setDataFilm] = useState([]);

    // Số dữ liệu xóa
    const [deletedCount, setDeletedCount] = useState();

    // Show model xóa
    const [show, setShow] = useState(false);

    // Id xóa
    const [id, setID] = useState();

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const handleData = (idFake) => {
        setID(idFake);
        setShow(true);
    };
    useEffect(() => {
        // Get link lấy ra dữ liệu là 1 object bao gồm 1 mảng và 1 count(số dữ liệu xóa )
        axios
            .get('http://localhost:12000/me/storedEmloyee')
            .then((myData) => {
                console.log(myData);
                // Set data dữ liệu
                setDataFilm(myData.data.musics);
                // Set số dữ liệu xóa
                setDeletedCount(myData.data.deletedCount);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    console.log(id);
    return (
        <div className={cx('list_film')}>
            <div className={cx('Request_film')}>
                <a href="/trash" className={cx('trash_film')} style={{ textDecoration: 'none' }}>
                    <h3>
                        <FontAwesomeIcon icon={faTrash} className={cx('icon_trash')} />({deletedCount})
                    </h3>
                </a>
                <Link to="/create" className={cx('button_create-film')} style={{ textDecoration: 'none' }}>
                    <FontAwesomeIcon icon={faSquarePlus} className={cx('icon_create')} />
                    <button>Tạo Phim</button>
                </Link>
            </div>
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Create time</th>
                        <th>Setting</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // Hàm map : biến đầu là dữ liệu , biến sau là chi mục {index}
                        dataFilm.map((dataItem, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <th>{dataItem.name}</th>
                                <th>{dataItem.category}</th>
                                <th>{dataItem.createdAt}</th>
                                <th>
                                    <div style={{ display: 'flex' }}>
                                        <a href={`/EditFilm/${dataItem._id}`} className={cx('btn btn-danger')}>
                                            Sửa
                                        </a>

                                        {/* Khi click vào button xóa  */}
                                        {/* Gọi đến link trong action với phương thức DELETE */}
                                        {/* Bên database nhận lại id và xóa theo ID */}
                                        <Button type="submit" variant="danger" onClick={() => handleData(dataItem._id)}>
                                            Xóa
                                        </Button>
                                    </div>
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

            {
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Bạn có chắc chắn muốn xóa </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Hủy
                        </Button>
                        <form method="POST" action={`http://localhost:12000/employee/${id}?_method=DELETE`}>
                            <Button variant="danger" type="submit">
                                Xóa
                            </Button>
                        </form>
                    </Modal.Footer>
                </Modal>
            }
        </div>
    );
}

export default ListEmployee;
