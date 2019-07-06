import React from 'react';
import { connect } from 'react-redux';
import { getCandies } from '../store';

class Candies extends React.Component {
  componentDidMount() {
    this.props.getCandies();
  }

  render() {
    const { candies } = this.props;
    console.log('connected candies component', candies);
    return (
      <div className="candies-container">
        {candies.map(candy => (
          <div key={candy.id}>
            <h2>{candy.name}</h2>
            <img src={`${candy.imageUrl}`} />
            <ul>
              <li>Quantity: {candy.quantity}</li>
              <li>{candy.description}</li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

const mapState = state => {
  return {
    candies: state.candies,
  };
};

const mapDispatch = dispatch => {
  return {
    getCandies: () => dispatch(getCandies()),
  };
};

export default connect(mapState, mapDispatch)(Candies);
