import * as actionTypes from '../constants/actionTypes';
import uuid from 'uuid';

const defaultState = [
  {
    id: uuid.v4(),
    name: 'Todo',
    notes: []
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
    case actionTypes.ATTACH_TO_LANE:
      const { laneId, noteId } = action.payload;

      return state.map(lane => {
        const noteIdx = lane.notes.indexOf(noteId);

        if (noteIdx >= 0) {
          return {
            ...lane,
            notes: lane.notes.filter(id => id !== noteId)
          }
        }

        if (lane.id === laneId) {
          return {
            ...lane,
            notes: [...lane.notes, noteId]
          }
        }

        return lane;
      });
    default:
      return state;
  }
}
