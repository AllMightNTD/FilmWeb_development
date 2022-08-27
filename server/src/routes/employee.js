const express = require('express');
var router = express.Router();

// import Newcontroller từ newcontroller.js
const employeeController = require('../app/controllers/EmployeeController');

// import Newcontroller vào để định nghĩa tuyến đường

// Gọi đến hàm index
router.post('/saveEmployee', employeeController.saveEmployee);
// Lấy thông tin sửa
router.get('/:id/edit', employeeController.edit);
// Sửa
router.put('/:id', employeeController.update);

// Xóa
router.delete('/:id', employeeController.delete);

router.use('/:slug', employeeController.show);

// export nó ra ngoài
module.exports = router;
