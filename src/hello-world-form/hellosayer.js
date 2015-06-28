import React from 'react';

class HelloSayer extends React.Component {
  render() {
    return (
      <div>
        <p>Hello {this.props.name}!</p>
      </div>
    );
  }
}

export default HelloSayer;
