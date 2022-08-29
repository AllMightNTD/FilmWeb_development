import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classnames from 'classnames/bind';
import style from './header.module.scss';
import { Link } from 'react-router-dom';
const cx = classnames.bind(style);

function Header() {
    return (
        <div className={cx('header_film')}>
            <nav className={cx('navbar_film')}>
                <Link to="/Employee" className={cx('title_film')}>
                    PHIM 1406
                </Link>
                <ul className={cx('List_item-classify')}>
                    <li className={cx('item_classify')}>Thể Loại</li>
                    <li className={cx('item_classify')}>Quốc gia</li>
                    <li className={cx('item_classify')}>Phim lẻ</li>
                    <li className={cx('item_classify')}>Phim bộ</li>
                    <li className={cx('item_classify')}>Chiếu rạp</li>
                    <li className={cx('item_classify')}>Sắp chiếu</li>
                    <li className={cx('item_classify')}>
                        <Link to="/listEmployee">Information</Link>
                    </li>
                    <li className={cx('item_classify')}>
                        <Link to="/create">Create</Link>
                    </li>
                </ul>
                <div className={cx('search')}>
                    <input className="input_search" type="text"></input>
                    <button className={cx('button')}></button>
                </div>
            </nav>
        </div>
    );
}

export default Header;
