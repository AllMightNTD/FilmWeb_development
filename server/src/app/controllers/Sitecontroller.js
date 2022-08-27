// Định nghĩa Controller
const User = require('../model/User');
const PAGE_SIZE = 2;
class Sitecontroller {
    index(req, res, next) {
        // Lấy ra dữ liệu model dưới dạng JSON
        // Bắn yêu cầu qua Model , lấy ra và trả dữ liệu lại dưới dạng JSON
        // methd find truyền vào một callback

        // User.find({}, function (err, users) {
        //     if (!err) {
        //         res.json(users);
        //     } else {
        //         res.status(400).json({ error: 'message' });
        //     }
        // });

        // Dùng promise trọc vào Model lấy ra dữ liệu mang về controller
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
                    res.render('home', { users: multipleMongooseToObject(users) });
                })
                .catch((error) => next(error));
        } else {
            User.find({}, function (err, users) {
                if (!err) {
                    res.send(users);
                } else {
                    res.status(500).json({ error: 'message' });
                }
            });

            // res.render('home')
        }
    }
}

module.exports = new Sitecontroller();
