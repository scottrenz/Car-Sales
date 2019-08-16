import React, {useState, useReducer} from 'react';
import {initialState, todoReducer} from '../reducers/todoReducer'
import { connect } from 'react-redux'
import {removeFeature1,removeFeature2,removeFeature3,removeFeature4} from '../actions'

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
        <ol type="1">
{props.feature1.name &&     <li>
     <button onClick={props.removeFeature1} className="button">X</button>
      {props.feature1.name}
      </li>}
{props.feature2.name &&     <li>
  <button onClick={props.removeFeature2} className="button">X</button>
      {props.feature2.name}
    </li>}
{props.feature3.name &&     <li>
  <button onClick={props.removeFeature3} className="button">X</button>
      {props.feature3.name}
    </li>}
{props.feature4.name &&     <li>
  <button onClick={props.removeFeature4} className="button">X</button>
      {props.feature4.name}
    </li>}
        </ol>
        <p>You can purchase items from the store.</p>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('header state',state)
  return {
    feature1: state.feature1,
    feature2: state.feature2,
    feature3: state.feature3,
    feature4: state.feature4
  }
}
export default connect(
mapStateToProps,
{
  removeFeature1,
  removeFeature2,
  removeFeature3,
  removeFeature4
}
)(AddedFeatures);
