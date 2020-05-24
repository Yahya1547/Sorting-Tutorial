import React, {useState} from 'react';
import TabHeader from './tabheader';
import TabContent from './tabcontent';

import './tab.scss';

const Tab = ({data, children}) => {
    const [activeTab, setActiveTab] = useState(0);

    const changeTabOnClick = index => {
        setActiveTab(index);
    }

    return (
        <div className="content-tab">
            <div className="tabs-body">
                <TabHeader data={data} click={changeTabOnClick} activeId={activeTab}/>
                <TabContent data={data} activeId={activeTab}>
                    {children}
                </TabContent>
            </div>
        </div> 
    );
}

export default Tab;