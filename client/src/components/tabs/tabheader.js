import React from 'react';

import './tab.scss';

const TabHeader = ({data, click, activeId}) => {

    const doClick = (index, event) => {
        click(index);
    }

    const activeClass = activeId;
    const tabs = data.map((item, index) => {
        return <li className={(activeClass === index ? 'active' : '')}>
            <a onClick={doClick.bind(this, index)} ><span>{item.name}</span></a>
        </li>
    });
    return ( 
        <ul className="tabs-header">{tabs}</ul>
    );
}

export default TabHeader;


