import React from 'react';
import ReactDOM from 'react-dom';

class StarsFrame extends React.Component {
    render() {
        let numberOfStars = Math.floor(Math.random()*9) + 1;
        let stars = [];
        for (let i = 0; i<numberOfStars; i++){
            stars.push(
                <span className="glyphicon glyphicon-star" />
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
        return (
            <div className="button-frame">
                <button className="btn btn-primary btn-lg">=</button>
            </div>
        );
    }
}

class AnswerFrame extends React.Component {
    render() {
        return (
            <div className="answer-frame">
                <div className="well">
                    ...
                </div>
            </div>
        );
    }
}

class NumbersFrame extends React.Component {
    render() {
        let numbers = [];
        for(let i = 1; i<= 9; i++){
            numbers.push(
                <div className="number">{i}</div>
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
    render() {
        return (
            <div id="game">
                <h2>Play Nine</h2>
                <hr />
                <div className="clearfix">
                    <StarsFrame />
                    <ButtonFrame />
                    <AnswerFrame />                
                </div>
                <NumbersFrame />
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById("root"));