import React, { useState } from 'react';
import Tab from '../tabs/tab';
import InputArray from '../forms/inputArray';
import Card from '../cards/card';
import { CSSTransition } from 'react-transition-group';

const MergeSort = () => {
    const [isSorted, setIsSorted] = useState(false);
    const [arr, setArray] = useState([]);
    const [index, setIndex] = useState(-1);

    const data = [
        {
            name: 'Algoritma',
            text: 'Merge Sort adalah algoritma pengurutan yang akan melakukan partisi terhadap array yang akan dilakukan pengurutan dan melakukan pengurutan mulai dari partisi - partisi terkecil. Pada visualisasi ini akan mulai melakukan pengurutan dengan penggabungan dari partisi - partisi terkecil.'
        },
        {
            name: 'Penggunaan',
            text: 'Untuk penggunaan aplikasi ini, silahkan input array yang akan di sort menggunakan algoritma Merge Sort ini dengan setiap elemen pada array dipisahkan dengan tanda koma seperti pada contoh sebagai berikut : \n 1,2,3,4,5'
        },
    ];

    const handleSort = async (array) => {
        const response = await fetch('/api/mergesort', {
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
        <div className="view">
            <h1>Merge Sort</h1>
            <div className="content">
                <div className="content--inner">
                    <Tab data={data}>
                        <p>Kompleksitas algoritma merge sort adalah O(n log n)</p>
                    </Tab>
                    <InputArray onSubmit={handleSubmit}/>
                    <CSSTransition
                    in={isSorted}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
                    >
                        <Card arr={arr} index={index} setIndex={setIndex}/>
                    </CSSTransition>
                </div>
            </div>
        </div>
    );
}

export default MergeSort;