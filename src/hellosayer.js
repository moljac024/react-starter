var React = require('react');

var HelloSayer = React.createClass({
    render: function() {
        return (<p>Hello {this.props.name}!</p>);
    }
});

module.exports = HelloSayer;


// import React from 'react';
//
// class HelloSayer extends React.Component {
//     render() {
//         return <p>Hello {this.props.name}!</p>;
//     }
// }
//
// export default HelloSayer;
