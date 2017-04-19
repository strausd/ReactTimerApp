var React = require('react');

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired
    },
    render: function () {
        var {countdownStatus} = this.props;
        var renderStartStopButton = () => {
            if(countdownStatus === 'started') {
                return (
                    <button className="ui button">Pause</button>
                );
            } else if (countdownStatus === 'paused') {
                return (
                    <button className="ui primary button">Start</button>
                );
            }
        };
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="negative ui button basic">Clear</button>
            </div>
        );
    }
});

module.exports = Controls
