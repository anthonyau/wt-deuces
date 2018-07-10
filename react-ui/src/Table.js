import React, { Component } from 'react';

import { Hand, Card, CardBack } from 'react-deck-o-cards';

import './Table.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }

  _handleClick() {
    console.log('card clicked')
  }

  render() {
    const defHandStyle = {
      maxHeight:'24vh',
      minHeight:'24vh',
      
      maxWidth:'80vw',
      padding: 0,
    };

    return (
      <div className="table--inner">
        <div className="cards--table">
          <Hand cards={[
            { rank: 10, suit: 1 },{rank: 11, suit: 3}
          ]} hidden={false} style={defHandStyle} onClick={() => this._handleClick()}/>
        </div>
      </div>
    );
  }
}

export default Table;
