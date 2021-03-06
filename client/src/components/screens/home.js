import React from 'react';
import './home.scss';
import GradientButton from '../buttons/gradientbutton';
import { useHistory } from 'react-router-dom';


const Home = () => {
    const history = useHistory();

    return ( 
        <h4>
            <div className="glitch" data-glitch="Sorting Tutorial" onClick={() => history.push('/')}>
            Sorting Tutorial
            </div>
            <div className="home">
                <div>
                    You can learn about sorting algorithm with visualization
                </div>
                <div id="selection">
                    <GradientButton type="3" onClick={() => history.push('/bubblesort')} value="Bubble Sort"/>
                    <div></div>
                    <GradientButton type="3" onClick={() => history.push('/mergesort')} value="Merge Sort"/>
                </div>
            </div>
        </h4>
    );
}

export default Home;