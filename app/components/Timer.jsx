var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            timerStatus: 'paused'
        };
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.stopTimer();
                    this.setState({
                        count: 0
                    });
                    break;
                case 'paused':
                    this.stopTimer();
                    break;
            }
        }
    },
    handleStatusChange: function (newStatus) {
        this.setState({
            timerStatus: newStatus
        });
    },
    componentWillUnmount: function () {
        this.handleStatusChange('stopped');
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 1000);
    },
    stopTimer: function () {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    render: function () {
        var {count, timerStatus} = this.state;
        return (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        );
    }
});

module.exports = Timer;
