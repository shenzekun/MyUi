import Mock from 'mockjs';
let lineData = Mock.mock({
    'line': [{
            name: '成交',
            type: 'line',
            smooth: true,
            "data|7": ["@integer(0,100)"]
        },
        {
            name: '意向',
            type: 'line',
            smooth: true,
            "data|7": ["@integer(0,100)"]
        }
    ]
})

export {
    lineData
}