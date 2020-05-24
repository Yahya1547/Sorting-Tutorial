import React from 'react';
import './card.scss';
import FlatButton from '../buttons/flatbutton';
const Card = ({arr, index, setIndex}) => {

    const showArr = (index) => {
        return arr[index].list.map((x, idx) => {
            return (
                <div key={idx} id={ idx >= arr[index].i && idx <= arr[index].j ? "changed" : "normal"}>
                <p>{x}</p>
                </div>
            );
        })
    }
    return ( 
        <div className="blog-container">

            <div className="blog-body">
                <div className="blog-title">
                    {index === arr.length - 1 ? 
                        <h1><span>Finish</span></h1>
                        :
                        <h1><span>Step : {index + 1}</span></h1>
                    }
                </div>
                <div className="blog-summary">
                    {showArr(index)}
                </div>
                <div id="control">
                    {index === 0 ? 
                        <div></div>
                        : 
                        <FlatButton value="prev" onClick={()=> setIndex(index - 1)}/>
                    
                    }
                    <div></div>
                    <div></div>
                    {index === arr.length - 1 ?
                        <div></div>
                        :
                        <FlatButton value="next" onClick={() => setIndex(index + 1)}/>
                    }
                    
                </div>
            </div>

        </div>
    );
}


export default Card;