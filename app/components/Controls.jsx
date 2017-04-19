var React = require('react');

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    onStatusChange: function (newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    },
    render: function () {
        var {countdownStatus} = this.props;
        var renderStartStopButton = () => {
            if(countdownStatus === 'started') {
                return (
                    <button className="ui primary button fluid" onClick={this.onStatusChange('paused')}>Pause</button>
                );
            } else if (countdownStatus === 'paused') {
                return (
                    <button className="ui primary button fluid" onClick={this.onStatusChange('started')}>Start</button>
                );
            }
        };
        return (
            <div className="ui stackable grid centered">
                <div className="three wide column">
                    <div className="controls">
                        {renderStartStopButton()}
                        <button className="negative ui button fluid" onClick={this.onStatusChange('stopped')}>Clear</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Controls
