import React from 'react';

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', color: 'blue', width: '30px', height: '30px', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', color: 'blue', width: '30px', height: '30px', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}

export { PrevArrow, NextArrow };
