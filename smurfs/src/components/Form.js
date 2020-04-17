import React, { useState } from 'react'

import { connect } from 'react-redux';
import { addSmurf } from '../Redux/Actions/MainActions';

export function Form({ addSmurf }) {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (name.length <= 0 || age.length <= 0 || height.length <= 0) return;
        let intAge, intHeight;
        try {
            intAge = parseInt(age);
            intHeight = parseInt(height);
        } catch (error) {
            console.error(error);
        }

        if (!intAge || !intHeight) return;

        addSmurf(name, age, height);
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleAgeChange = e => {
        if (e.target.value.length > 0 && !(/\d/.test(e.target.value.split("")[e.target.value.length - 1]))) return;
        else setAge(e.target.value);
    }

    const handleHeightChange = e => {
        if (e.target.value.length > 0 && !(/\d/.test(e.target.value.split("")[e.target.value.length - 1]))) return;
        else setHeight(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={handleNameChange} placeholder='Name' />
            <input type='text' value={age} onChange={handleAgeChange} placeholder='Age' />        
            <input type='text' value={height} onChange={handleHeightChange} placeholder='Height' />
            <input type='submit' value={"Add Smurf"} />
        </form>
    )
}

export default connect(state => ({}), {
    addSmurf
})(Form);