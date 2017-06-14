import uuid from 'uuid';
import * as actionTypes from '../constants/actionTypes';

export const createNote = task => {
  return {
    type: actionTypes.CREATE_NOTE,
    payload: {
      id: uuid.v4(),
      isEditing: true,
      task
    }
  };
};

export const updateNote = updatedNote => {
  return {
    type: actionTypes.UPDATE_NOTE,
    payload: updatedNote
  };
};

export const deleteNote = id => {
  return {
    type: actionTypes.DELETE_NOTE,
    payload: id
  };
};
