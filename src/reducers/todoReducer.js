import React, { useReducer } from 'react'

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  store: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500},
    { id: 3, name: 'Premium sound system', price: 500},
    { id: 4, name: 'Rear spoiler', price: 250}
  ]
}
// Initial object is established

// We will use the same reducer we created in the previous section
export function todoReducer(state , action) {
  console.log('in reducer',action)
  console.log('in reducer state is',state)
  let newState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500},
      { id: 3, name: 'Premium sound system', price: 500},
      { id: 4, name: 'Rear spoiler', price: 250}
    ]
  }
  switch (action.type) {
    case 'BUY_FEATURE':
        // console.log('in buy feature',action)
        // console.log('in buy feature before',state)
        for (let i=0;i<state.car.features.length;i++)
    {if(parseInt(state.car.features[i].id) === parseInt(action.payload))
      { console.log('returning not adding')
         return state}
    }
    // console.log('returning yes adding')
    for (let i=0;i<state.car.features.length;i++)
    {
      console.log('pushing i, id',i,state.car.features[i].id)
      newState.car.features[newState.car.features.length] = state.store[i]
     }
  for (let i=0;i<state.store.length;i++)
      {
        // console.log('the two are', (state.store[i].id),parseInt(action.payload))
        if(parseInt(state.store[i].id) === parseInt(action.payload))
      {
        newState.car.features[newState.car.features.length] = state.store[i]
        // console.log('doing push')
        // newState.car.features.push({id: state.store[i].id,
        // name: state.store[i].name,
        // price: state.store[i].price
     }}
console.log('new state is',newState)
    return newState
    case 'REMOVE_FEATURE':
        console.log('in remove',action)
        for (let i=0;i<state.car.features.length;i++)
        {
          if(state.car.features[i].id !== action.payload )
          newState.car.features.push({id: state.car.features[i].id,
                              name: state.car.features[i].name,
                              price: state.car.features[i].price
                            }) }
        return newState
          default:
              console.log('in reducer default',action)

      return state
  }
}


