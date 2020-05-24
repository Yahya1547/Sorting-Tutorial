import React from 'react';

import './tab.scss';

const TabContent = ({ activeId, data, children}) => {
    const activeClass = activeId;

    const content = data.map((item, index) => {
        return <div key={index} className={'tabs-textItem ' + (activeClass === index ? 'show' : '')}>
            {item.text.split('\n').map((teks, key) => {
                return <p key={key}>{'\t'}{teks}</p>
            })}
            {item.name === 'Algoritma' ? children : ""}
        </div>
    });
    return ( 
    <div className="tabs-content">
        {content}
    </div>
    );
}

export default TabContent;