import * as actionTypes from '../constants/actionTypes';
import uuid from 'uuid';

const defaultState = [
  {
    id:uuid.v4(),
    name: 'Todo',
    notes: [
      {
        id: uuid.v4(),
        task: 'Make Northambria Great Again',
      }
    ]
  },
  {
    id: uuid.v4(),
    name: 'In progress',
    notes: []
  }
];

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_LANE:
      return null;
    default:
      return state;
  }
}
