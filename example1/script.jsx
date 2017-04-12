import React from 'react';
import ReactDOM from 'react-dom';

function Button(props) {
    return (
        <button onClick={() => props.localHandleClick(props.increment)}>
            +{props.increment}
        </button>
    )
}

function Result(props) {
    return (
        <div>{props.localCounter}</div>
    );
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(increment) {
        this.setState({
            counter: this.state.counter + increment
        });
    }
    render() {
        return (
            <div>
                <Button localHandleClick={this.handleClick} increment={1} />
                <Button localHandleClick={this.handleClick} increment={5} />
                <Button localHandleClick={this.handleClick} increment={10} />
                <Button localHandleClick={this.handleClick} increment={100} />
                <Result localCounter={this.state.counter} />
            </div>
        )
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById("root")
);