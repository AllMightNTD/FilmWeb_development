// Định nghĩa Controller
const User = require('../model/User');
class EmployeeController {
    show(req, res, next) {
        // Tìm kiếm một document dựa trên 1 trường đó là slug (findOne)
        User.findOne({ slug: req.params.slug })
            .then((user) => {
                // Gọi hàm chuyển sang Object từ handlerbar
                res.json(user);
            })
            .catch(next);
    }
    saveEmployee(req, res, next) {
        // Lưu dữ liệu trên sever
        const user = new User(req.body);
        user.save()
            .then(() => res.redirect('http://localhost:3000/listemployee'))
            .catch((error) => res.send(error.message));
    }
    // [GET] / employee / id / edit
    edit(req, res, next) {
        // Tìm kiếm theo ID
        User.findById(req.params.id)
            .then((user) => res.json(user))
            .catch(next);
    }

    // [PUT] / employee / id
    update(req, res, next) {
        User.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('http://localhost:3000/listEmployee'))
            .catch((error) => res.send(error.message));
    }

    // [DELETE] / employee / id
    // Xóa theo id
    delete(req, res, next) {
        User.delete({ _id: req.params.id })
            .then(() => res.redirect('http://localhost:3000/listEmployee'))
            .catch((error) => res.send(error.message));
    }

    // [RESTORE] / employee / id
    // Khôi phục những cái đã xóa bằng restore
    restoreEmployee(req, res, next) {
        User.restore({ _id: req.params.id })
            .then(() => res.redirect('http://localhost:3000/listEmployee'))
            .catch((error) => res.send(error.message));
    }

    // [DELETE FOREVER] /employee/force/id
    // Xóa vĩnh viễn bằng deleteOne
    deleteForever(req, res, next) {
        User.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('http://localhost:3000/trash'))
            .catch((error) => res.send(error.message));
    }
}

module.exports = new EmployeeController();
