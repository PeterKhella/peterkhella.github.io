import React from 'react';
import './Button.css';

const STYLES = [
    'btn--primary',
    'btn--outline',
]

const SIZES = [
    'btn--medium',
    'btn--large',
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,

}) => {
    // checks size and style and if not true then uses 0 array
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button className={`btn $(checkButtonStyle) $(checkButtonSize)`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}