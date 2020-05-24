import React from 'react';

import './tab.scss';

const TabContent = ({ activeId, data}) => {
    const activeClass = activeId;

    const content = data.map((item, index) => {
        return <div key={index} className={'tabs-textItem ' + (activeClass === index ? 'show' : '')}>
            <p>{item.text}</p>
        </div>
    });
    return ( 
    <div className="tabs-content">{content}</div>
    );
}

export default TabContent;