import uuid from 'uuid';
import * as actionTypes from '../constants/actionTypes';

export const createLane = name => {
  return null;
};

export const updateLane = updatedLane => {
  return null;
};

export const deleteLane = id => {
  return null;
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
