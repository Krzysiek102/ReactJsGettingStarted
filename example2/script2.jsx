var Card = React.createClass({
    render: function(){
        return (
            <div>
                <img src="https://avatars.githubusercontent.com/u/12782881?v=3" />
                <h3>Krzysztof Kurek</h3>
                <hr />
            </div>
        );
    }
})
var Main = React.createClass({
    render: function () {
        return (
            <div>
                <Card />
            </div>
        )
    }
})

ReactDOM.render(<Main />, document.getElementById("root"));