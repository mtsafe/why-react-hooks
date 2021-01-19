import React from 'react';

class BtnOld extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <p>{this.state.count}</p>
    );
  }
}

export default BtnOld;