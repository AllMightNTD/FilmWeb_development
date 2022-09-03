// Định nghĩa Controller
const { deleteModel } = require('mongoose');
const User = require('../model/User');
const PAGE_SIZE = 2;
class MeController {
    // List employee
    // Số dữ liệu xóa : countDocumentDeleted (count)
    // Trả về 1 object bao gồm 1 mảng và 1 count
    storedemployee(req, res, next) {
        Promise.all([User.find(), User.countDocumentsDeleted()]).then(([users, deletedCount]) => {
            res.send({
                users,
                deletedCount,
            });
        });
    }
    // Tìm danh sách đã xóa bằng findDeleted
    trashemployee(req, res, next) {
        User.findDeleted({})
            .then((users) => {
                // Bắn dữ liệu lên
                res.send(users);
            })
            .catch((error) => next(error));
    }
    // showCategory
    showCategory(req, res, next) {
        var page = req.query.page;
        if (page) {
            // Get page
            // Chuyển sang int
            page = parseInt(page);
            // Số lượng bỏ qua
            var skipNumber = (page - 1) * PAGE_SIZE;
            User.find({})
                .skip(skipNumber)
                // Số lượng giới hạn
                .limit(PAGE_SIZE)
                .then((users) => {
                    // Lấy dữ liệu trong model user truyền vào home

                    //  Biến nó thành Object Literal từ Object Constructor

                    // Trọc sang view (render sang view ) truyền data lấy từ model sang view
                    // view đọc file , logic và render ra màn hình từ đó trọc về browser
                    res.json(users);
                })
                .catch((error) => next(error));
        } else {
            User.find({ category: req.params.category })
                .then((user) => {
                    // Gọi hàm chuyển sang Object từ handlerbar
                    res.send(user);
                })
                .catch(next);
        }
    }
}

module.exports = new MeController();
