var React = require('react');
var {Link, IndexLink} = require('react-router')

var Navigation = () => {
    return (
        <div id="nav-bar" className="ui pointing menu top-bar">
            <div className="header item">
                React Timer App
            </div>
            <IndexLink to="/" activeClassName="active" className="item click">
                Timer
            </IndexLink>
            <Link to="/" activeClassName="active" className="item click">
                Countdown
            </Link>
            <div className="header right item">Created by <span>&nbsp;</span><a>Danny Straus</a></div>
        </div>
    );

};

module.exports = Navigation;
