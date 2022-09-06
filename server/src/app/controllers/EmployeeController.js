// Định nghĩa Controller
const Music = require('../model/Music');
class EmployeeController {
    show(req, res, next) {
        // Tìm kiếm một document dựa trên 1 trường đó là slug (findOne)
        Music.findOne({ slug: req.params.slug })
            .then((music) => {
                // Gọi hàm chuyển sang Object từ handlerbar
                res.json(music);
            })
            .catch(next);
    }
    saveEmployee(req, res, next) {
        // Lưu dữ liệu trên sever
        const music = new Music(req.body);
        music
            .save()
            .then(() => res.redirect('http://localhost:3000/listemployee'))
            .catch((error) => res.send(error.message));
    }
    // [GET] / employee / id / edit
    edit(req, res, next) {
        // Tìm kiếm theo ID
        Music.findById(req.params.id)
            .then((music) => res.json(music))
            .catch(next);
    }

    // [PUT] / employee / id
    update(req, res, next) {
        Music.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('http://localhost:3000/listEmployee'))
            .catch((error) => res.send(error.message));
    }

    // [DELETE] / employee / id
    // Xóa theo id
    delete(req, res, next) {
        Music.delete({ _id: req.params.id })
            .then(() => res.redirect('http://localhost:3000/listEmployee'))
            .catch((error) => res.send(error.message));
    }

    // [RESTORE] / employee / id
    // Khôi phục những cái đã xóa bằng restore
    restoreEmployee(req, res, next) {
        Music.restore({ _id: req.params.id })
            .then(() => res.redirect('http://localhost:3000/listEmployee'))
            .catch((error) => res.send(error.message));
    }

    // [DELETE FOREVER] /employee/force/id
    // Xóa vĩnh viễn bằng deleteOne
    deleteForever(req, res, next) {
        Music.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('http://localhost:3000/trash'))
            .catch((error) => res.send(error.message));
    }
}

module.exports = new EmployeeController();
