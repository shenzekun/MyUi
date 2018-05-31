import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import {Link} from 'react-router-dom'
const menu = (
    <Menu>
        <Menu.Item>
            <Link to="/user">用户中心</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/setting">系统配置</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/login">退出登陆</Link>
        </Menu.Item>
    </Menu>
);
export default class Logout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let logoutWrap = {
            textAlign: 'right',
            paddingRight: 25,
            borderBottom: '1px solid #ddd',
            paddingBottom: 15
        };
        return (
            <div style={logoutWrap}>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link">
                        Hi Jason &nbsp;&nbsp;<Icon type="down" />
                    </a>
                </Dropdown>
            </div>
        );
    }
}
