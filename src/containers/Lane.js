import Lane from '../components/Lane';
import * as LaneActions from '../actions/lanes';
import * as NoteActions from '../actions/notes';
import { connect } from 'react-redux';
import { DragSource } from 'react-dnd';
import { DropTarget } from 'react-dnd';
import * as itemTypes from '../constants/itemTypes';

const laneSource = {
  beginDrag(props) {
    return {
      id: props.lane.id
    }
  },
  isDragging(props, monitor) {
    return props.id === monitor.getItem().id;
  }
};

const laneTarget = {
  //TODO: laneTarget
};

const mapStateToProps = state => ({
  allNotes: state.notes
});

const mapDispatchToProps = dispatch => ({
  onCreateNote(laneId) {
    const newNote = NoteActions.createNote('New note');

    dispatch(newNote);
    dispatch(LaneActions.attachToLane(laneId, newNote.payload.id));
  },
  onDeleteNote(laneId, noteId) {
    dispatch(NoteActions.deleteNote(noteId));

    if(laneId) {
      dispatch(LaneActions.detachFromLane(laneId, noteId));
    }
  },
  onEditNote(noteId, value) {
    console.log(noteId);
    console.log(value);
    const updatedNote = {
      id: noteId
    };

    if (value) {
      updatedNote.task = value;
      updatedNote.isEditing = false;
    } else {
      updatedNote.isEditing = true;
    }
    console.log(updatedNote);
    dispatch(NoteActions.updateNote(updatedNote));
  },
  onMoveNote(sourceId, targetId) {

  },
  attachToLane(laneId, noteId) {

  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Lane);