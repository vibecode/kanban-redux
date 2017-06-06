import uuid from 'uuid';

export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const createNote = (note) => {
  return {
    type: CREATE_NOTE,
    note: {
      id: uuid,
      ...note
    }
  }
};

export const updateNote = (note) => {
  return {
    type: UPDATE_NOTE,
    note
  }
};

export const deleteNote = (id) => {
  return {
    type: DELETE_NOTE,
    id
  }
};
