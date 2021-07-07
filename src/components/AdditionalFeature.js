import React, { useState, useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/todoReducer';
import { connect } from 'react-redux';

import { buyFeature } from '../actions';
const AdditionalFeature = props => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
      return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
                    // onClick={buyFeature(props.feature.id)}      s
                    onClick={() =>
                      dispatch({ type: 'BUY_FEATURE', payload: props.feature.id }) }
                          className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
  };
};

export default AdditionalFeature;
