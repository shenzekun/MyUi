import React from 'react';
import Topbar from 'components/Topbar';
import { Title } from 'components/Title';
import { Poem } from 'components/Poem';

class Setting extends React.Component {
    render() {
        return (
            <div>
                <Topbar />
                {Title('系统配置')}
                {Poem()}
            </div>
        );
    }
}

export default Setting;
