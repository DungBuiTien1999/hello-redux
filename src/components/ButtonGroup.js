import React from 'react';
import Button from './Button';

function ButtonGroup({technologies}) {
    return (
        <div className="btn-list" >
            {
                technologies.map((item, index) => (
                    <Button key={index} content={item} />
                ))
            }
        </div>
    )
}

export default ButtonGroup
