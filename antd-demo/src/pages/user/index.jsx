import React from 'react';
import Topbar from 'components/Topbar';
import { Title } from 'components/Title';
import { Steps, Icon } from 'antd';
import './index.scss'
const Step = Steps.Step;

export default class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Topbar />
                {Title('用户中心')}
                <div className="wrap">
                    <Steps>
                        <Step status="finish" title="Login" icon={<Icon type="user" />} />
                        <Step
                            status="finish"
                            title="Verification"
                            icon={<Icon type="solution" />}
                        />
                        <Step status="process" title="Pay" icon={<Icon type="loading" />} />
                        <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
                    </Steps>
                </div>
            </div>
        );
    }
}
