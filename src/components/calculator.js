import React, { Component } from 'react'
import CalculatorTitle from './calculatorTitle'
import OutputScreen from './outputScreen'
import Button from './button'

export class calculator extends Component {
    constructor() {
        super();
        this.state = {
            question: '',
            answer: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (event) => {
        this.setState({ answer: '' })
        var value = event.target.value;
        switch (value) {
            case '=': {
                if (this.state.question !== "") {
                    var ans = ""
                    try {
                        ans = eval(this.state.question)
                    } catch (error) {
                        this.setState({ answer: error })
                    }
                    if (ans === undefined) {
                        this.setState({ answer: "Math Error" })
                        break;
                    } else {
                        this.setState({ answer: ans, question: '' })
                    }
                    break;
                }
            }
            case "Clear": {
                this.setState({ answer: "", question: "" })
                break
            }
            case "Delete": {
                var str = this.state.question
                str = str.substr(0, str.length - 1)
                this.setState({ question: str })
                break;
            }
            default: {
                this.setState({ question: this.state.question += value });
                break;
            }

        }
    }

    render() {
        return (
            <div className="frame">
                <CalculatorTitle value="Sahith's Calculator" />
                <div className="mainCalc">
                    <OutputScreen question={this.state.question} answer={this.state.answer} />
                    <div className="button-row">
                        <Button label={'Clear'} handleClick={this.handleClick} />
                        <Button label={'Delete'} handleClick={this.handleClick} />
                        <Button label={'.'} handleClick={this.handleClick} />
                        <Button label={'/'} handleClick={this.handleClick} />
                    </div>
                    <div className="button-row">
                        <Button label={'7'} handleClick={this.handleClick} />
                        <Button label={'8'} handleClick={this.handleClick} />
                        <Button label={'9'} handleClick={this.handleClick} />
                        <Button label={'*'} handleClick={this.handleClick} />
                    </div>
                    <div className="button-row">
                        <Button label={'4'} handleClick={this.handleClick} />
                        <Button label={'5'} handleClick={this.handleClick} />
                        <Button label={'6'} handleClick={this.handleClick} />
                        <Button label={'-'} handleClick={this.handleClick} />
                    </div>
                    <div className="button-row">
                        <Button label={'1'} handleClick={this.handleClick} />
                        <Button label={'2'} handleClick={this.handleClick} />
                        <Button label={'3'} handleClick={this.handleClick} />
                        <Button label={'+'} handleClick={this.handleClick} />
                    </div>
                    <div className="button-row">
                        <Button label={'0'} handleClick={this.handleClick} />
                        <Button label={'='} handleClick={this.handleClick} />
                    </div>
                </div>
            </div>
        )
    }
}

export default calculator
