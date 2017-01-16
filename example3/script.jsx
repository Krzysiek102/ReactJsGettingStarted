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
        let disabled;
        let button;
        let correct = this.props.correct;

        switch (correct) {
            case true:
                button = (
                    <button className="btn btn-success btn-lg"
                        onClick={this.props.acceptAnswer}>
                        <span className="glyphicon glyphicon-ok" />
                    </button>
                );
                break;
            case false:
                button = (
                    <button className="btn btn-danger btn-lg">
                        <span className="glyphicon glyphicon-remove" />
                    </button>
                );
                break;
            default:
                disabled = this.props.selectedNumbers.length === 0;
                button = (
                    <button className="btn btn-primary btn-lg" disabled={disabled}
                        onClick={this.props.checkAnswer}>
                        =
                    </button>
                );
        }

        return (
            <div className="button-frame">
                {button}
                <br /><br />
                <button className="btn btn-warning btn-xs"
                    onClick={this.props.redraw}
                    disabled={this.props.redraws === 0}>
                    <span className="glyphicon glyphicon-refresh" />
                    &nbsp;
                    {this.props.redraws}
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
            className = `number selected-${this.props.selectedNumbers.indexOf(i) >= 0} `;
            className += `used-${this.props.usedNumbers.indexOf(i) >= 0}`;
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
            numberOfStars: this.randomNumber(),
            usedNumbers: [],
            redraws: 5,
            selectedNumbers: [],
        };
        this.selectNumber = this.selectNumber.bind(this);
        this.unselectNumber = this.unselectNumber.bind(this);
        this.sumOfSelectedNumbers = this.sumOfSelectedNumbers.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.acceptAnswer = this.acceptAnswer.bind(this);
        this.redraw = this.redraw.bind(this);
        this.randomNumber = this.randomNumber.bind(this);
    }

    randomNumber(){
        return Math.floor(Math.random() * 9) + 1;
    }

    selectNumber(clickedNumber) {
        if (this.state.selectedNumbers.indexOf(clickedNumber) < 0) {
            this.setState({
                selectedNumbers: this.state.selectedNumbers.concat(clickedNumber),
                correct: null
            });
        }
    }

    unselectNumber(clickedNumber) {
        let selectedNumbers = this.state.selectedNumbers;
        let indexOfNumber = selectedNumbers.indexOf(clickedNumber);
        selectedNumbers.splice(indexOfNumber, 1);
        this.setState({
            selectedNumbers: selectedNumbers,
            correct: null
        });
    }

    sumOfSelectedNumbers() {
        return this.state.selectedNumbers.reduce(function (p, n) {
            return p + n;
        }, 0);
    }

    checkAnswer() {
        let correct = (this.state.numberOfStars === this.sumOfSelectedNumbers());
        this.setState({ correct: correct });
    }

    acceptAnswer() {
        let usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);
        this.setState({
            selectedNumbers: [],
            usedNumbers: usedNumbers,
            correct: null,
            numberOfStars: this.randomNumber()
        });
    }

    redraw() {
        if (this.state.redraws > 0) {
            this.setState({
                numberOfStars: this.randomNumber(),
                correct: null,
                selectedNumbers: [],
                redraws: this.state.redraws - 1
            });
        }
    }

    render() {
        let selectedNumbers = this.state.selectedNumbers;
        let numberOfStars = this.state.numberOfStars;
        let correct = this.state.correct;
        let usedNumbers = this.state.usedNumbers;
        let redraws = this.state.redraws;
        return (
            <div id="game">
                <h2>Play Nine</h2>
                <hr />
                <div className="clearfix">
                    <StarsFrame numberOfStars={numberOfStars} />
                    <ButtonFrame selectedNumbers={selectedNumbers}
                        correct={correct}
                        checkAnswer={this.checkAnswer}
                        acceptAnswer={this.acceptAnswer}
                        redraw={this.redraw}
                        redraws={redraws}
                        />
                    <AnswerFrame selectedNumbers={selectedNumbers}
                        unselectNumber={this.unselectNumber} />
                </div>
                <NumbersFrame selectedNumbers={selectedNumbers}
                    selectNumber={this.selectNumber}
                    usedNumbers={usedNumbers}
                    />
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById("root"));