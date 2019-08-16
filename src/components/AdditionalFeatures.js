import React, {useState, useReducer} from 'react';
import {initialState, todoReducer} from '../reducers/todoReducer'
import { connect } from 'react-redux'
import {buyFeature1,buyFeature2,buyFeature3,buyFeature4} from '../actions'
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      <ol type="1">
      <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={props.buyFeature1} className="button">Add</button>
      {props.store1.name} (+{props.store1.price})
      </li>
      <li>
      <button onClick={props.buyFeature2} className="button">Add</button>
      {props.store2.name} (+{props.store2.price})
      </li>
      <li>
      <button onClick={props.buyFeature3} className="button">Add</button>
      {props.store3.name} (+{props.store3.price})
      </li>
      <li>
      <button onClick={props.buyFeature4} className="button">Add</button>
      {props.store4.name} (+{props.store4.price})
    </li>
    </ol>
        <p>Nice looking car!</p>
    </div>
  );
};
const mapStateToProps = state => {
  console.log('header state',state)
  return {
    store1: state.store1,
    store2: state.store2,
    store3: state.store3,
    store4: state.store4
  }
}
export default connect(
mapStateToProps,
{
  buyFeature1,
  buyFeature2,
  buyFeature3,
  buyFeature4
}
)(AdditionalFeatures);
