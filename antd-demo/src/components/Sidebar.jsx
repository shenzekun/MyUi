import React from 'react';
import { Menu, Icon } from 'antd';
import PropTypes from 'prop-types';
const SubMenu = Menu.SubMenu;

export default class Sidebar extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    };
    constructor(props) {
        super(props);
        this.state = {
            current: document.cookie.split(';')[0].split('=')[1]
        };
        this.handleClick = this.handleClick.bind(this);
    }
    changeCookie = v => {
        document.cookie = 'nowKey=' + v;
    };
    handleClick(e) {
        this.setState({ current: e.key });
        this.changeCookie(e.key);
        if (e.key == 'home') {
            this.context.router.history.push('/');
        } else if (e.key == 'list') {
            this.context.router.history.push('list');
        } else if (e.key == 'report') {
            this.context.router.history.push('report');
        } else if (e.key == 'user') {
            this.context.router.history.push('user');
        } else if (e.key == 'setting') {
            this.context.router.history.push('setting');
        }
    }
    componentDidMount() {
        var now = window.location.pathname.substring(1);
        now = now === '' ? 'home' : now;
        this.changeCookie(now);
        this.setState({ current: now });
    }
    render() {
        return (
            <div id="leftMenu">
                <img src={require('../images/logo.png')} width="50" id="logo" />
                <Menu
                    onClick={this.handleClick}
                    theme="light"
                    mode="vertical"
                    selectedKeys={[this.state.current]}
                    style={{ width: 146 }}
                >
                    <Menu.Item key="home">
                        <Icon type="home" />首页
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="bar-chart" />
                                <span>导航一</span>
                            </span>
                        }
                    >
                        <Menu.Item key="list">子导航一(表格)</Menu.Item>
                        <Menu.Item key="report">子导航二</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="user">
                        <Icon type="user" />用户中心
                    </Menu.Item>
                    <Menu.Item key="setting">
                        <Icon type="setting" />系统配置
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}
