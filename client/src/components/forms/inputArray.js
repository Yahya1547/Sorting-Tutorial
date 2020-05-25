import React from 'react';
import { Formik } from 'formik';

import './inputArray.scss';

const InputArray = ({onSubmit}) => {
    return ( 
        <Formik
        initialValues={{array : ''}}
        onSubmit={onSubmit}
        >
            {(props) => {
            return (
                <div>
                    <div className="container__item">
                        <input type="text" className="form__field" placeholder="Array (contoh: 1,2,3)" pattern="\d+(,\d+)*" onChange={props.handleChange('array')} value={props.values.array}  required/>
                        <button type="submit" className="btn btn--primary btn--inside uppercase" onClick={props.handleSubmit} >Sort</button>
                    </div>
                </div>
            );
        }}

        </Formik>
    );
}

export default InputArray;