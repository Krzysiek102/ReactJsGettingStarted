import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {
    render() {
        return (
            <div>
                <img src="https://avatars.githubusercontent.com/u/12782881?v=3" />
                <h3>Krzysztof Kurek</h3>
                <hr />
            </div>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <div>
                <Card />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById("root"));