import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import PropTypes from 'prop-types';
import './index.scss';
const FormItem = Form.Item;

class LoginPage extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    };
    constructor(props) {
        super(props);
        this.handelSubmit = this.handelSubmit.bind(this);
        console.log(this.props);
    }
    openNotification(type) {
        return notification[type]({
            message: '用户名&密码',
            description: '都是：1',
            duration: 6
        });
    }
    handelSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const username = values.username;
                const password = values.password;
                console.log(typeof username);
                if (parseInt(username, 10) === 1 && parseInt(password, 10) === 1) {
                    document.cookie = 'nowKey=' + 'home';
                    this.context.router.history.push('/');
                } else {
                    this.openNotification('info');
                }
            }
        });
    }
    componentDidMount() {
        this.openNotification('info');
    }
    componentWillUnmount() {
        notification.destroy()
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div id="login-page-wrap">
                <p>Sign in</p>
                <div id="loginWrap">
                    <Form onSubmit={this.handelSubmit}>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }]
                            })(<Input placeholder="Username" />)}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }]
                            })(<Input type="password" placeholder="Password" />)}
                        </FormItem>
                        <Button type="primary" id="loginBtn" htmlType="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

let Login = Form.create()(LoginPage);
export default Login;
