import React from 'react';
import { useDispatch } from 'react-redux'
import { setTechnology } from '../actions';

function Button({content}) {
    const dispatch = useDispatch();

    const disPatchBtnAction = (e) => {
        const tech = e.target.dataset.tect;
        dispatch(setTechnology(tech));
    }

    return (
        <button data-tect={content} className="btn" onClick={disPatchBtnAction} >{content}</button>
    )
}

export default Button
