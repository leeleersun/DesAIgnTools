import { useState } from 'react';

import { NavLink, useNavigate } from "react-router-dom";
import { Input, Select } from "antd";

const { Search } = Input;
const { Option } = Select;
function NavHeader(props) {

    const navigate = useNavigate();

    const [searchOptions, setSearchOption] = useState("issue");

    function onChange(value) {
        setSearchOption(value);
    }

    function onSearch(value) {
        if (value) {
            // 跳转到搜索页，将搜索内容传递过去
            navigate("/searchPage", {
                state: {
                    value,
                    searchOptions
                }
            })
        } else {
            navigate("/issues")
        }

    }



    return (
        <div className="headerContainer">
           
            {/* 头部导航 */}
            <nav className="navContainer">
                <NavLink to="/" className="navgation">
                    DesAIgn Tools Graph
                </NavLink>           
            </nav>
            

        </div>
    );
}

export default NavHeader;