import React from 'react';
import {Spring} from 'react-spring/renderprops';

const SpringOpacity = () => {
    return (
        <Spring className="opacity"
            from={{ opacity: 0, marginTop: -500 }}
            to={{ opacity: 1, marginTop: 0 }}
        >
        </Spring>
    );
}

export default SpringOpacity;