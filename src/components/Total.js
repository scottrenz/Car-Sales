import React, {useState, useReducer} from 'react';
import {initialState, todoReducer} from '../reducers/todoReducer'
import { connect } from 'react-redux'
import {buyFeature} from '../actions'

const Total = props => {
  console.log(props.carPrice ,parseInt( props.feature1.price ), props.feature2.price , props.feature3.price , props.feature4.price)
  return (
    <div className="content">
      <h4>Total Amount: ${(props.carPrice) + (props.feature1.price ? props.feature1.price : 0) + (props.feature2.price ? props.feature2.price : 0) + (props.feature3.price ? props.feature3.price : 0) + (props.feature4.price ? props.feature4.price : 0)}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('header state',state)
  return {
    carPrice: state.car.price,
    additionalPrice: state.additionalPrice,
    feature1: state.feature1,
    feature2: state.feature2,
    feature3: state.feature3,
    feature4: state.feature4
  }
}
export default connect(
mapStateToProps,
{}
)(Total);
