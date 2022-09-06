import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faEllipsisVertical, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import VideoItem from '../../SearchVideoItem';
import classNames from 'classnames/bind';
import style from './Search.module.scss';
import axios from 'axios';

const cx = classNames.bind(style);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setsearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    // Xử lý giá trị search
    const hanldeSearchValue = (e) => {
        const value = e.target.value;

        // Không cho bắt đầu bằng khoảng trắng
        if (!value.startsWith(' ')) {
            setsearchValue(value);
        }
    };

    const handleClearSearch = () => {
        setsearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    useEffect(() => {
        if (!searchValue.trim()) {
            return;
        }
        setLoading(true);
        axios
            .get(`http://localhost:12000/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((response) => {
                setSearchResult(response ? response.data : []);
                console.log(response.data);
                setLoading(false);
            })
            .catch(function (error) {
                // handle error
                setLoading(false);
                console.log(error);
            });
    }, [searchValue]);
    return (
        <Tippy
            interactive
            // Có dữ liệu , có truyền tìm kiếm thì mới hiển thị
            visible={showResult && searchResult.length > 0 && searchValue != '' ? true : false}
            render={(attrs) => (
                // Để ý cái dấu {} phải có từ return
                // Còn dấu ( ) thì không return

                <div className={cx('search_result')} tabIndex="-1" {...attrs}>
                    {loading && (
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                    )}
                    {searchResult.map((item) => (
                        <VideoItem data={item} />
                    ))}
                </div>
            )}
            onClickOutside={() => setShowResult(false)}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    className="input_search"
                    type="text"
                    placeholder="Search video..."
                    spellCheck={false}
                    onChange={hanldeSearchValue}
                    // Focus vào thì show lại kết quả tìm kiếm
                    onFocus={() => setShowResult(true)}
                ></input>
                {/* Clear */}
                {/* Có searchValue hiện X */}
                {/* Có value và không có Loading */}
                {searchValue && (
                    <button className={cx('clear')} onClick={handleClearSearch}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* Loading  */}
                {/* {loading && (
                    <button className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )} */}
                <button className={cx('search_button')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
