import Table from 'react-bootstrap/Table';
import classNames from 'classnames/bind';
import style from './TrashEmployee.module.scss';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const cx = classNames.bind(style);
function TrashEmployee() {
    const [dataTrash, setDataTrash] = useState([]);
    const [show, setShow] = useState(false);
    const [idforce, setIDForce] = useState();

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const handleData = (idFake) => {
        setIDForce(idFake);
        setShow(true);
    };
    useEffect(() => {
        axios
            .get('http://localhost:4100/me/trash')
            .then((response) => setDataTrash(response ? response.data : []))
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    console.log(dataTrash);
    console.log(idforce);

    return (
        <div className={cx('trash_film')}>
            <Link to="/listemployee">
                <h3>Danh sách phim</h3>
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Creat Time</th>
                        <th>Setting</th>
                    </tr>
                </thead>
                <tbody>
                    {dataTrash.length > 0 ? (
                        dataTrash.map((dataItem, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <th>{dataItem.name}</th>
                                <th>{dataItem.createdAt}</th>
                                <th>
                                    <div style={{ display: 'flex' }}>
                                        <form
                                            method="POST"
                                            action={`http://localhost:4100/employee/${dataItem._id}/restore?_method=PATCH`}
                                        >
                                            <Button className={cx('btn btn-danger')} type="submit">
                                                Khôi phục
                                            </Button>
                                        </form>

                                        {/* Khi click vào button xóa  */}
                                        {/* Gọi đến link trong action với phương thức DELETE */}
                                        {/* Bên database nhận lại id và xóa theo ID */}
                                        <Button type="submit" variant="danger" onClick={() => handleData(dataItem._id)}>
                                            Xóa Vĩnh Viễn
                                        </Button>
                                    </div>
                                </th>
                            </tr>
                        ))
                    ) : (
                        <p>
                            Thùng rác trống
                            <Link to="/listemployee">Quay lại danh sách phim</Link>
                        </p>
                    )}
                </tbody>
            </Table>

            {
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Hành động này sẽ không thể khôi phục . Bạn có chắc muốn xóa ???</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Hủy
                        </Button>

                        {/* Xóa vĩnh viễn với id */}
                        <form method="POST" action={`http://localhost:4100/employee/${idforce}/force?_method=DELETE`}>
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

export default TrashEmployee;
