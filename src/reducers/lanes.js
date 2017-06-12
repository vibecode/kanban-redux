import * as actionTypes from '../constants/actionTypes';
import update from 'immutability-helper';
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
      return [...state, action.payload];
    case actionTypes.UPDATE_LANE:
      return state.map(lane => {
        if (lane.id === action.payload.id) {
          return { ...lane, ...action.payload }
        }
        return lane;
      });
    case actionTypes.DELETE_LANE:
      return state.filter(lane => lane.id !== action.payload.id);
    case actionTypes.ATTACH_TO_LANE: {
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
    }
    case actionTypes.DETACH_FROM_LANE: {
      const { laneId, noteId } = action.payload;

      return state.map(lane => {
        if (lane.id === laneId) {
          return {
            ...lane,
            notes: lane.notes.filter(id => id !== noteId)
          }
        }
        return lane;
      });
    }

    case actionTypes.MOVE_LANE: {
      const sourceId = action.payload.sourceId;
      const targetId = action.payload.targetId;
      const sourceLane = state.find(lane => lane.id === sourceId);
      const sourceLaneIndex = state.findIndex(lane => lane.id === sourceId);
      const targetLaneIndex = state.findIndex(lane => lane.id === targetId);

      return update(state, {
        $splice: [
          [sourceLaneIndex, 1],
          [targetLaneIndex, 0, sourceLane],
        ],
      });
    }

    default:
      return state;
  }
}
