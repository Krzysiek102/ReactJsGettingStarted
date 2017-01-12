import React from 'react';
import ReactDOM from 'react-dom';

class StarsFrame extends React.Component {
    render() {
        let stars = [];
        for (let i = 0; i < this.props.numberOfStars; i++) {
            stars.push(
                <span key={i} className="glyphicon glyphicon-star" />
            )
        }
        return (
            <div className="stars-frame">
                <div className="well">
                    {stars}
                </div>
            </div>
        );
    }
}

class ButtonFrame extends React.Component {
    render() {
        let disabled = this.props.selectedNumbers.length === 0;
        return (
            <div className="button-frame">
                <button className="btn btn-primary btn-lg" disabled={disabled}>
                =
                </button>
            </div>
        );
    }
}

class AnswerFrame extends React.Component {
    render() {
        let props = this.props;
        let selectedNumbers = props.selectedNumbers.map(function (i) {
            return (
                <span key={i} onClick={props.unselectNumber.bind(null, i)}>
                {i}
                </span>
            );
        });
        return (
            <div className="answer-frame">
                <div className="well">
                    {selectedNumbers}
                </div>
            </div>
        );
    }
}

class NumbersFrame extends React.Component {
    render() {
        let numbers = [];
        let className;
        for (let i = 1; i <= 9; i++) {
            className = `number selected-${this.props.selectedNumbers.indexOf(i) >= 0}`;
            numbers.push(
                <div className={className} onClick={this.props.selectNumber.bind(null, i)} key={i}>
                    {i}
                </div>
            );
        }
        return (
            <div className="numbers-frame">
                <div className="well">
                    {numbers}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfStars: Math.floor(Math.random() * 9) + 1,
            selectedNumbers: [],
        };
        this.selectNumber = this.selectNumber.bind(this);
        this.unselectNumber = this.unselectNumber.bind(this);
    }
    selectNumber(clickedNumber) {
        if (this.state.selectedNumbers.indexOf(clickedNumber) < 0) {
            this.setState({
                selectedNumbers: this.state.selectedNumbers.concat(clickedNumber)
            });
        }
    }

    unselectNumber(clickedNumber) {
        let selectedNumbers = this.state.selectedNumbers;
        let indexOfNumber = selectedNumbers.indexOf(clickedNumber);
        selectedNumbers.splice(indexOfNumber, 1);
        this.setState({
            selectedNumbers:selectedNumbers 
        });
    }    

    render() {
        let selectedNumbers = this.state.selectedNumbers;
        let numberOfStars = this.state.numberOfStars;
        return (
            <div id="game">
                <h2>Play Nine</h2>
                <hr />
                <div className="clearfix">
                    <StarsFrame numberOfStars={numberOfStars}/>
                    <ButtonFrame selectedNumbers={selectedNumbers} />
                    <AnswerFrame selectedNumbers={selectedNumbers} 
                                unselectNumber={this.unselectNumber}/>
                </div>
                <NumbersFrame selectedNumbers={selectedNumbers}
                    selectNumber={this.selectNumber}
                    />
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById("root"));