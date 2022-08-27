import Table from 'react-bootstrap/Table';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import classnames from 'classnames/bind'
import style from './ListEmployee.module.scss'


function ListEmployee() {
  const cx = classnames.bind(style)
    const [dataFilm, setDataFilm] = useState([])
    const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = (dataItem) => {
    //     idFake = dataItem._id
    //     console.log(idFake);
    //     setShow(true)
    // };

 


    useEffect(() => {
        axios.get('http://localhost:2345')
         .then(response =>setDataFilm(response ? response.data: []))
         .catch(function (error) {
        // handle error
         console.log(error);
       }
         )
    
     },[])
  return (
    <div className={cx('list_film')}>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Create time</th>
        </tr>
      </thead>
      <tbody>
            {
                // Hàm map : biến đầu là dữ liệu , biến sau là chi mục {index}
                dataFilm.map((dataItem , index) => (
                  <tr key={index}>
                  <th>{index + 1}</th>
                  <th>{dataItem.name}</th>
                  <th>{dataItem.createdAt}</th>
                  <th>
                 <div style={{display:"flex"}} >
                 <a href={`/EditFilm/${dataItem._id}`} className={cx('btn btn-danger')}>Sửa</a>

                 {/* Khi click vào button xóa  */}
                 {/* Gọi đến link trong action với phương thức DELETE */}
                 {/* Bên database nhận lại id và xóa theo ID */}
                  <form method = 'POST' action={`http://localhost:4000/employee/${dataItem._id}?_method=DELETE`}>
                    <Button type='submit'  variant="danger" onClick={() => console.log(dataItem._id)}  >Xóa</Button>
                  </form>
                 </div>
                </th>
                </tr>
                 )  )
            }
      </tbody>
      </Table>
      {
        //   <Modal show={show} onHide={handleClose}>
        //   <Modal.Header closeButton>
        //     <Modal.Title>Modal heading</Modal.Title>
        //   </Modal.Header>
        //   <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        //   <Modal.Footer>
        //     <Button variant="secondary" onClick={handleClose}>
        //       Close
        //     </Button>
         
        //   </Modal.Footer>
        // </Modal>
        }
    </div>
    
  );
}

export default ListEmployee;