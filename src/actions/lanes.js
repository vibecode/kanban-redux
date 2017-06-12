import uuid from 'uuid';
import * as actionTypes from '../constants/actionTypes';

export const createLane = name => {
  return {
    type: actionTypes.CREATE_LANE,
    payload: {
      id: uuid.v4(),
      name,
      notes: []
    }
  };
};

export const updateLane = updatedLane => {
  return {
    type: actionTypes.UPDATE_LANE,
    payload: updatedLane
  };
};

export const deleteLane = id => {
  return {
    type: actionTypes.DELETE_LANE,
    payload: {
      id
    }
  }
};

export const attachToLane = (laneId, noteId) => {
  return {
    type: actionTypes.ATTACH_TO_LANE,
    payload: {
      laneId,
      noteId
    }
  }
};

export const detachFromLane = (laneId, noteId) => {
  return {
    type: actionTypes.DETACH_FROM_LANE,
    payload: {
      laneId,
      noteId
    }
  }
};

export const move = (target, sourceId, targetId) => {
  return {
    type: target === 'note' ? actionTypes.MOVE_NOTE : actionTypes.MOVE_LANE,
    payload: {
      sourceId,
      targetId,
    },
  };
};