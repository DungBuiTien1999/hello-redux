import React from 'react';
import { setTechnology } from '../actions';
import { store } from '../store';

function disPatchBtnAction(e) {
    const tech = e.target.dataset.tect;
    store.dispatch(setTechnology(tech));
}

function Button({content}) {
    return (
        <button data-tect={content} className="btn" onClick={disPatchBtnAction} >{content}</button>
    )
}

export default Button
