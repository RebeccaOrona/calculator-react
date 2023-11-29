import React from 'react';
import '../css/ClearButton.css';

const ClearButton = (props) => (
  <div className='clear-button' onClick={props.handleClear}>
    {props.children}
  </div>
);

export default ClearButton;