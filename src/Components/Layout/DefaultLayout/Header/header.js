import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classnames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { useState } from 'react';
import style from './header.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faEllipsisVertical, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faCircleXmark } from '@fortawesome/free-regular-svg-icons';
const cx = classnames.bind(style);

function Header() {
    const [visible, setVisible] = useState(true);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const [searchValue, setsearchValue] = useState();

    // Xử lý giá trị search
    const hanldeSearchValue = (e) => {
        const value = e.target.value;

        // Không cho bắt đầu bằng khoảng trắng
        if (!value.startsWith(' ')) {
            setsearchValue(value);
        }
    };

    const dataA = [
        {
            name: 'Thể Loại',
            to: '/',
            placement: 'bottom-end',
            option: {
                hello: [
                    {
                        category: 'act',
                    },
                    {
                        category: 'love',
                    },
                    {
                        category: 'detective',
                    },
                    {
                        category: 'love',
                    },
                ],
            },
        },
        {
            name: 'Quốc Gia',
            to: '/',
            placement: 'bottom',
            option: {
                hello: [
                    {
                        category: 'act',
                    },
                    {
                        category: 'love',
                    },
                    {
                        category: 'detective',
                    },
                    {
                        category: 'love',
                    },
                ],
            },
        },
        {
            name: 'Phim Lẻ',
            to: '/',
            placement: 'bottom',
            option: {
                hello: [
                    {
                        category: 'act',
                    },
                    {
                        category: 'love',
                    },
                    {
                        category: 'detective',
                    },
                    {
                        category: 'love',
                    },
                ],
            },
        },
        {
            name: 'Phim Bộ',
            to: '/',
            placement: 'bottom',
            option: {
                hello: [
                    {
                        category: 'act',
                    },
                    {
                        category: 'love',
                    },
                    {
                        category: 'detective',
                    },
                    {
                        category: 'love',
                    },
                ],
            },
        },
        {
            name: 'Chiếu Rạp',
            to: '/',
            visible: false,
            placement: 'bottom',
            option: {
                hello: [
                    {
                        category: 'act',
                    },
                    {
                        category: 'love',
                    },
                    {
                        category: 'detective',
                    },
                    {
                        category: 'love',
                    },
                ],
            },
        },
        {
            name: 'Sắp Chiếu',
            to: '/',
            visible: false,
            placement: 'bottom',
            option: {
                hello: [
                    {
                        category: 'Hành Động',
                    },
                    {
                        category: 'Tình Cảm',
                    },
                    {
                        category: 'Hài Hước',
                    },
                    {
                        category: 'Trinh Thám',
                    },
                ],
            },
        },
    ];

    dataA.map((data) => {
        console.log(data.name);
        data.option.hello.map((data2) => {
            console.log(data2.name);
        });
    });

    return (
        <div className={cx('header_film')}>
            <nav className={cx('navbar_film')}>
                <Link to="/Employee" className={cx('title_film')}>
                    PHIM 1406
                </Link>
                <ul className={cx('List_item-classify')}>
                    {dataA.map((dataOption, index) => (
                        <Tippy
                            visible={dataOption.visible}
                            interactive
                            placement={dataOption.placement}
                            render={(attrs) => (
                                <div className={cx('OptionMovie_box')} tabIndex="-1" {...attrs}>
                                    {dataOption.option.hello.map((data2) => {
                                        return (
                                            <a
                                                className={cx('option_link-movie')}
                                                href={`/EmployeeCategory/${data2.category}`}
                                            >
                                                {data2.category}
                                            </a>
                                        );
                                    })}
                                </div>
                            )}
                        >
                            <Link
                                key={index}
                                to={dataOption.to}
                                className={cx('item_classify')}
                                style={{ textDecoration: 'none' }}
                            >
                                {dataOption.name}
                            </Link>
                        </Tippy>
                    ))}
                </ul>
                <div className={cx('search')}>
                    <input
                        value={searchValue}
                        className="input_search"
                        type="text"
                        placeholder="Search video..."
                        spellCheck={false}
                        onChange={hanldeSearchValue}
                    ></input>
                    {/* Clear */}
                    {searchValue && (
                        <button className={cx('clear')} onClick={() => setsearchValue('')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {/* Loading  */}
                    {/* <button className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button> */}
                    <button className={cx('search_button')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('bar_settings')}>
                    <Tippy
                        interactive
                        visible={visible}
                        onClickOutside={hide}
                        placement="bottom-start"
                        render={(attrs) => (
                            <div className={cx('Menu_settings-box')} tabIndex="-1" {...attrs}>
                                <Link
                                    to="/listEmployee"
                                    className={cx('menu_setting-item')}
                                    style={{ textDecoration: 'none' }}
                                >
                                    Information
                                </Link>
                                <Link
                                    to="/create"
                                    className={cx('menu_setting-item')}
                                    style={{ textDecoration: 'none' }}
                                >
                                    Create
                                </Link>
                            </div>
                        )}
                    >
                        <button onClick={visible ? hide : show} className={cx('bar_menu')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} className={cx('icon-bars')} />
                        </button>
                    </Tippy>
                </div>
                <div className={cx('account_box')}>
                    <button className={cx('account')}>
                        <FontAwesomeIcon icon={faUser} className={cx('icon_account')} />
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Header;
