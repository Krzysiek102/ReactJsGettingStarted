import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        $.get("http://api.github.com/users/petehunt", data => this.setState(data));
    }

    render() {
        return (
            <div>
                <img src={this.state.avatar_url} width="80" />
                <h3>{this.state.name}</h3>
                <hr />
            </div>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <div>
                <Card login='petehunt' />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById("root"));