import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss'; // Import SCSS styles

const Button = ({ text, onClick, variant = 'primary', className = '', ...props }) => {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {text}
        </button>
    );
};

// Type validation for props
Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary']),
    className: PropTypes.string,
};

export default Button;
