import React from 'react';
import ReactDOM from 'react-dom';

function Button(props) {
    return (
        <button onClick={() => props.onClick()}>
            +{props.increment}
        </button>
    )
}

function Result(props) {
    return (
        <div>{props.aggregation}</div>
    );
}

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
    }
    handleClick(increment) {
        this.setState({
            counter: this.state.counter + increment
        });
    }
    render() {
        return (
            <div>
                <Button onClick={()=>this.handleClick(1)} increment={1} />
                <Button onClick={()=>this.handleClick(5)} increment={5} />
                <Button onClick={()=>this.handleClick(10)} increment={10} />
                <Button onClick={()=>this.handleClick(100)} increment={100} />
                <Result aggregation={this.state.counter} />
            </div>
        )
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById("root")
);