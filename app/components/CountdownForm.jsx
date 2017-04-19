var React = require('react');

var CountdownForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var strSeconds = this.refs.seconds.value;
        if(strSeconds.match(/^[0-9]*$/) && strSeconds.length > 0) {
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    },
    render: function () {
        return (
            <div className="ui grid centered">
                <div className="three wide column">
                    <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                        <div className="ui fluid input form-element">
                            <input type="text" placeholder="Enter time in seconds" ref="seconds"/>
                        </div>
                        <div className="form-element">
                            <button className="ui fluid button">Start</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = CountdownForm;
