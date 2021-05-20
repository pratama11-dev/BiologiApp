import React from 'react';
import PropTypes from "prop-types";
import Styled from "styled-components";


const Container = Styled.div`
  progress {
    margin-top: 100px;
    transform: rotate(90deg);
  }

  progress[value] {
    width: ${(props) => props.width};

    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 10px;
    background-color: #0099FF;
    border-radius: 20px;
  }  

  progress[value]::-webkit-progress-value {
    height: 10px;
    background-color: ${(props) => props.color};

  }
`;

const ProgressBar = ({value, max, color, width}) => {
    return (
        <Container color={color} width={width}>
            <progress value={value} max={max} />
            <span>: {value - 1} mL</span>
        </Container>
    );
}

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string
};

ProgressBar.defaultProps = {
    max: 100,
    color: "lightBlue",
    width: "250px"
};

export default ProgressBar;
