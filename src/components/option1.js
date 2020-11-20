import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Option1 extends Component {
    render() {
        return(
            <div>
                <div>
                    <span className="text-center"><h2><b>Skills</b></h2></span>
                </div>
                <div className="text-center">
                    <Button variant="dark"><span className="fas fa-plus"></span>
                    </Button>{' '}
                </div>

                <div className="text-center">
                    <i className="fab fa-aws fa-3x text-white"></i><span>&nbsp;&nbsp;&nbsp;</span>
                    <i className="fab fa-php fa-5x text-warning"></i><span>&nbsp;&nbsp;&nbsp;</span>
                    <i className="fab fa-joomla fa-3x text-danger"></i>
                </div>
                <div></div>
            </div>
        )
    }
}

export default Option1;
