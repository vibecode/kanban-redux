import *  as types from '../actions/notes';

const innitialState = [];

export default (state = innitialState, action) => {
  switch(action.type) {
    case types.CREATE_NOTE:
      return [...state, action.note];
    case types.UPDATE_NOTE:
      return state.map(note => {
        if (action.note.id === note.id) {
          return {...note, ...action.note}
        }

        return note;
      });
    case types.DELETE_NOTE:
      return state.filter(note => note.id !== action.id);

    default:
      return state;
  }
}
