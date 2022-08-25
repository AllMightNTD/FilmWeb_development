import Table from 'react-bootstrap/Table';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";
function ListEmployee() {
    const [dataFilm, setDataFilm] = useState([])
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
    <div className='container ' style={{marginTop:"50px"}}>
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
                dataFilm.map((dataItem , index) =>  (
                       <tr key={index}>
                          <th>{index + 1}</th>
                         <th>{dataItem.name}</th>
                         <th>{dataItem.createdAt}</th>
                         <th>
                        <a href={`/EditFilm/${dataItem._id}`} class='btn btn-danger'>Sửa</a>
                        <a href='' class='btn btn-danger'>Xóa</a>
                       </th>
                       </tr>
                ))
            }
      </tbody>
    </Table>
    </div>
  );
}

export default ListEmployee;