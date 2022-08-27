// import newRouter từ ngoài vào
const siteRouter = require('./site');
// Lấy newRouter từ file new
const useRouter = require('./employee');

function route(app) {
    //   Thêm đường dẫn và sử dụng nó
    app.use('/employee', useRouter);
    app.use('/', siteRouter);
}

module.exports = route;
