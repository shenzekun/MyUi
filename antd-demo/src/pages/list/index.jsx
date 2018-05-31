import React from 'react';
import Mock from 'mockjs';
import Topbar from 'components/Topbar';
import { Title } from 'components/Title';
import { Table, Icon, Tooltip } from 'antd';
import './list.scss'

let mock = Mock.mock({
    'data|121-140': [
        {
            'key|+1': 1,
            name: '@name',
            'sex|1': ['男', '女'],
            age: '@integer(22, 60)',
            email: '@email'
        }
    ]
});
class TablePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tData: []
        };
    }
    componentDidMount() {
        this.setState({
            tData: mock.data
        });
    }
    render() {
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex'
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age'
            },
            {
                title: '邮箱',
                dataIndex: 'email',
                key: 'email',
                render: text => (
                    <a href={text} target="_blank">
                        {text}
                    </a>
                )
            },
            {
                title: '操作',
                dataIndex: 'handle',
                key: 'handle',
                render: (text, record, index) => (
                    <span>
                        <Tooltip title="编辑">
                            <Icon type="edit" style={{ color: '#3dbd7d' }} />
                        </Tooltip>&nbsp;&nbsp;
                        <Tooltip title="切换性别">
                            <Icon type="retweet" style={{ color: '#49a9ee' }} />
                        </Tooltip>&nbsp;&nbsp;
                        <Tooltip title="删除">
                            <Icon type="delete" style={{ color: '#FD5B5B' }} />
                        </Tooltip>
                    </span>
                )
            }
        ];
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect: (record, selected, selectedRows) => {
                console.log(record, selected, selectedRows);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                console.log(selected, selectedRows, changeRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User'
            })
        };
        const pagination = {
            size: 'default',
            showQuickJumper: true,
            total: this.state.tData.length,
            showSizeChanger: true,
            onShowSizeChange: (current, pageSize) => {
                console.log('Current: ', current, '; PageSize: ', pageSize);
            },
            onChange: current => {
                console.log('Current: ', current);
            }
        };
        return (
            <div>
                <Topbar />
                {Title('子导航一(表格)')}
                <Table
                    dataSource={this.state.tData}
                    columns={columns}
                    pagination={pagination}
                    rowSelection={rowSelection}
                />
            </div>
        );
    }
}

export default TablePage;
