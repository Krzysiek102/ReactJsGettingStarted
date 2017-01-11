import React from 'react';
import ReactDOM from 'react-dom';

class StarsFrame extends React.Component {
    render() {
        return (
            <div id="stars-frame">
                <div className="well">
                    <span className="glyphicon glyphicon-star" />
                </div>
            </div>
        );
    }
}

class ButtonFrame extends React.Component {
    render() {
        return (
            <div>
                ...
            </div>
        );
    }
}

class AnswerFrame extends React.Component {
    render() {
        return (
            <div>
                ...
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div id="game">
                <h2>Play Nine</h2>
                <StarsFrame />
                <ButtonFrame />
                <AnswerFrame />

            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById("root"));