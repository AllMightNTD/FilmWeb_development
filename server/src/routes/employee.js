const express = require('express');
var router = express.Router();

// import EmployeeController từ EmployeeController.js
const employeeController = require('../app/controllers/EmployeeController');

// import EmployeeController vào để định nghĩa tuyến đường

// Gọi đến hàm index
router.post('/saveEmployee', employeeController.saveEmployee);
// Lấy thông tin sửa
router.get('/:id/edit', employeeController.edit);
// Sửa
router.put('/:id', employeeController.update);

// Xóa mềm (xóa ở giao diện , k xóa ở dữ liệu)
router.delete('/:id', employeeController.delete);

// Khôi Phục cái đã xóa
router.patch('/:id/restore', employeeController.restoreEmployee);

// Xóa vĩnh viễn
router.delete('/:id/force', employeeController.deleteForever);

router.use('/:slug', employeeController.show);

// export nó ra ngoài
module.exports = router;
