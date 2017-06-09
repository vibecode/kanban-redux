import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.CREATE_NOTE:
      return [...state, action.payload];
    case actionTypes.UPDATE_NOTE:
      return state.map(note => {
        if (action.note.id === note.id) {
          return {...note, ...action.payload}
        }

        return note;
      });
    case actionTypes.DELETE_NOTE:
      return state.filter(note => note.id !== action.id);

    default:
      return state;
  }
}
