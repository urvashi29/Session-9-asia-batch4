import React, { Component } from "react";
import { connect } from "react-redux";
import { onIncrement } from "./action";

class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.count}
        <button onClick={() => this.props.onInc(2)}>+</button>
      </div>
    );
  }
}

// get the data from central storage
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onInc: (val) => dispatch(onIncrement(val))
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
