import React, { Component } from 'react';
import Option1 from './option1';
import Option2 from './option2';
import Option3 from './option3';
import Option4 from './option4';
import Option5 from './option5';
import Option6 from './option6';
import Option7 from './option7';

var optionValue= 1;

//CURRENTLY UNUSED. Previosly created to handle displaying of skill tags.
class QuickAccess extends Component {
    constructor() {
      super();
      this.state = {
        Option: <Option1 />
      };
      this.onChangeValue = this.onChangeValue.bind(this);
      this.onLeftArrowClick = this.onLeftArrowClick.bind(this);
      this.onRightArrowClick = this.onRightArrowClick.bind(this);
    }

    onRightArrowClick(event) {
        switch(optionValue) {
            case 1:
                this.setState({Option: <Option2 />});
                break;
            case 2:
                this.setState({Option: <Option3 />});
                break;
            case 3:
                this.setState({Option: <Option4 />});
                break;
            case 4:
                this.setState({Option: <Option5 />});
                break;
            case 5:
                this.setState({Option: <Option6 />});
                break;
            case 6:
                this.setState({Option: <Option7 />});
                break;
        }
        if(optionValue<6){
            optionValue += 1;
        }
    }

    onLeftArrowClick(event) {
        switch(optionValue) {
            case 1:
                this.setState({Option: <Option1 />});
                break;
            case 2:
                this.setState({Option: <Option1 />});
                break;
            case 3:
                this.setState({Option: <Option2 />});
                break;
            case 4:
                this.setState({Option: <Option3 />});
                break;
            case 5:
                this.setState({Option: <Option4 />});
                break;
            case 6:
                this.setState({Option: <Option5 />});
                break;
        }
        if(optionValue>1){
            optionValue -= 1;
        }
    }

    onChangeValue(event) {
      console.log(event.target.value);
      if(event.target.value === 'page1'){
          optionValue=1;
          this.setState({Option: <Option1 />});
      }
      else if(event.target.value === 'page2'){
          optionValue=2;
          this.setState({Option: <Option2 />});
      }
      else if(event.target.value === 'page3'){
          optionValue=3;
          this.setState({Option: <Option3 />});
      }
      else if(event.target.value === 'page4'){
          optionValue=4;
          this.setState({Option: <Option4 />});
      }
      else if(event.target.value === 'page5'){
          optionValue=5;
          this.setState({Option: <Option5 />});
      }
      else if(event.target.value === 'page6'){
          optionValue=6;
          this.setState({Option: <Option6 />});
      }
    }

    render() {
        return (
            <div className="first-column">
                <div className="page-content1" />
                    {this.state.Option}
            </div>
        );
    }
}

export default QuickAccess;
