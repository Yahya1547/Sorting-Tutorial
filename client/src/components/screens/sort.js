import React, {useState} from 'react';
import './sort.scss';
import Card from '../cards/card';
import Tab from '../tabs/tab';
import InputArray from '../forms/inputArray';


const Sort = () => {
    const [isSorted, setIsSorted] = useState(false);
    const [arr, setArray] = useState([]);
    const [index, setIndex] = useState(-1);

    const data = [
        {
            name: 'Algoritma',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt expedita, beatae officia nostrum labore. Reiciendis, commodi adipisci eius est recusandae ipsa incidunt repellat explicabo nobis corporis debitis non ullam, eos itaque, quia, iste repudiandae. Iusto numquam consectetur quo, et, quis deleniti ipsam eaque perferendis. Repellat ad, molestiae id deserunt praesentium distinctio similique nesciunt itaque. Repellat error enim blanditiis esse, odio commodi exercitationem nostrum perferendis veniam quod, recusandae provident aspernatur aliquam placeat odit cumque fugit ducimus, voluptatibus ad?'
        },
        {
            name: 'Pseudocode',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores perspiciatis repellat soluta dolorum, quam quos possimus atque rerum porro voluptate beatae dolor incidunt! Corporis, tempore quasi fugit est. Ex, quae!Aliquam nulla explicabo facilis, consequuntur tenetur! Rem architecto veritatis quo corporis sapiente nesciunt culpa at enim similique officiis adipisci in commodi suscipit, natus facilis, repellat laboriosam eaque obcaecati quaerat vero!'
        },
        {
            name: 'Penggunaan',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus similique architecto sequi delectus non, nobis consequuntur officia, laboriosam reiciendis ea! Natus iste quas perspiciatis magnam repellat, voluptate excepturi esse.'
        }
    ];

    const handleSort = async (array) => {
        const response = await fetch('/api/bubblesort', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({array})
        });
        
        const body = await response.json();
    
        setArray(body);
        setIndex(0);
        setIsSorted(true);
    }

    const handleSubmit = (values, actions) => {
        actions.resetForm();
        var arr = values.array.split(',');
        var parsedArr = arr.map(num => parseInt(num, 10));
        handleSort(parsedArr);
    }
    
    return ( 
        <div>
            <Tab data={data}/>
            <InputArray onSubmit={handleSubmit}/>
            {isSorted ? 
                <Card arr={arr} index={index} setIndex={setIndex}
                />
                :
                ""
            }
            
            
        </div>
    );
}


export default Sort;