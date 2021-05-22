import React from 'react';
import PropTypes from "prop-types";
import Styled from "styled-components";


const Container = Styled.div`
ProgressBarVer {
    margin-top: 100px;
  }

  ProgressBarVer[value] {
    width: ${(props) => props.width};

    -webkit-appearance: none;
    appearance: none;
  }

  ProgressBarVer[value]::-webkit-progress-bar {
    height: 10px;
    background-color: #0099FF;
    border-radius: 20px;
  }  

  ProgressBarVer[value]::-webkit-progress-value {
    height: 10px;
    background-color: ${(props) => props.color};

  }
`;

const ProgressBarVer = ({value, max, color, width}) => {
    return (
        <Container color={color} width={width}>
            <progress value={value} max={max} />
            <span>: {value} mL</span>
        </Container>
    );
}

ProgressBarVer.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string
};

ProgressBarVer.defaultProps = {
    max: 100,
    color: "lightBlue",
    width: "250px"
};

export default ProgressBarVer;
