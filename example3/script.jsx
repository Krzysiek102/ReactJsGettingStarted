import React from 'react';
import ReactDOM from 'react-dom';

class StarsFrame extends React.Component {
    render() {
        return (
            <div className="stars-frame">
                <div className="well">
                    <span className="glyphicon glyphicon-star" />
                    <span className="glyphicon glyphicon-star" />
                    <span className="glyphicon glyphicon-star" />
                    <span className="glyphicon glyphicon-star" />
                    <span className="glyphicon glyphicon-star" />
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
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById("root"));