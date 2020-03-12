import React from 'react';
import { PageHeader } from 'antd';

const InfoBar = (props) => {
    return (
        <PageHeader
            style={{ backgroundColor: localStorage.getItem('avatarColor') }}
            ghost={false}
            title={`${props.room} - Discussion Forum`}
            onBack={() => props.history.push()}
        />
    );
}

export default InfoBar;