import React from 'react';

const RadioButton = () => {
    return(
        <div className="text-center" onChange={this.onChangeValue}>
            <input type="radio" value="page1" name="option1" defaultChecked /> 1 <span></span>
            <input type="radio" value="page2" name="option1" /> &nbsp;&nbsp;
            <input type="radio" value="page3" name="option1" /> &nbsp;&nbsp;
            <input type="radio" value="page4" name="option1" /> &nbsp;&nbsp;
            <input type="radio" value="page5" name="option1" /> &nbsp;&nbsp;
            <input type="radio" value="page6" name="option1" /> &nbsp;&nbsp;
            <input type="radio" value="page7" name="option1" /> &nbsp;&nbsp;
            <input type="radio" value="page8" name="option1" /> &nbsp;&nbsp;
        </div>
    )
}

export default RadioButton;
