import React from 'react';
import Topbar from 'components/Topbar';
import { Title } from 'components/Title';
import {LineReact} from 'components/charts';
import { Card, Row, Col } from 'antd';
import Mock from 'mockjs';
import { lineData } from '../../data/data';
import './home.scss';

let mock = Mock.mock({
    'id|4': [
        {
            'key|1': ['紫外线指数', '穿衣指数', '感冒指数', '洗车指数'],
            'value|1-5': '★'
        }
    ]
});
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idx: []
        };
    }
    componentDidMount() {
        this.setState({ idx: mock.id });
    }
    render() {
        return (
            <div>
                <Topbar />
                {Title('首页')}
                <Card title="今日生活指数">
                    <Row gutter={16}>
                        {this.state.idx &&
                            this.state.idx.map((item, index) => {
                                return (
                                    <Col span="6" key={index}>
                                        <Card>
                                            {item.key}： <span className="stars">{item.value}</span>
                                        </Card>
                                    </Col>
                                );
                            })}
                    </Row>
                </Card>
                <LineReact data={lineData.line} />
            </div>
        );
    }
}

export default Home;
