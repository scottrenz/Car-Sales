export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg'
  },
store1:  { id: 1, name: 'V-6 engine', price: 1500 },
store2: { id: 2, name: 'Racing detail package', price: 1500},
store3: { id: 3, name: 'Premium sound system', price: 500},
store4: { id: 4, name: 'Rear spoiler', price: 250},
feature1: {name: ''},
feature2: {name: ''},
feature3: {name: ''},
feature4: {name: ''}
}
// Initial object is established

// We will use the same reducer we created in the previous section
export function todoReducer(state , action) {
  let feature1 = state.feature1
  let feature2 = state.feature2
  let feature3 = state.feature3
  let feature4 = state.feature4
  switch (action.type) {
    case 'BUY_FEATURE1':
{feature1 = state.store1}
return {...state, feature1: feature1}
  case 'BUY_FEATURE2':
{feature2 = state.store2}
return {...state, feature2: feature2}
  case 'BUY_FEATURE3':
{feature3 = state.store3}
return {...state, feature3: feature3}
  case 'BUY_FEATURE4':
{feature4 = state.store4}
return {...state, feature4: feature4}
case 'REMOVE_FEATURE1':
return {...state, feature1: {name: ''}}
case 'REMOVE_FEATURE2':
return {...state, feature2: {name: ''}}
case 'REMOVE_FEATURE3':
return {...state, feature3: {name: ''}}
case 'REMOVE_FEATURE4':
return {...state, feature4: {name: ''}}
default:
return state
  }
}


