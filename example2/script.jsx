import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        $.get(`http://api.github.com/users/${this.props.login}`, data => this.setState(data));
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

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();
        let loginInput = this.refs.login;
        this.props.addCard(loginInput.value);
        loginInput.value = '';
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input placeholder="github login" ref="login" />
                <button>Add</button>
            </form>
        );
    }
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logins: ['zpao', 'fisherwebdev']
        };
        this.addCard = this.addCard.bind(this);
    }

    addCard(loginToAdd) {
        this.setState({ logins: this.state.logins.concat(loginToAdd) });
    }

    render() {
        let cards = this.state.logins.map(function (login) {
            return (<Card key={login} login={login} />);
        });
        return (
            <div>
                <Form addCard={this.addCard} />
                {cards}
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById("root"));