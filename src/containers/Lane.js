import Lane from '../components/Lane';
import * as LaneActions from '../actions/lanes';
import * as NoteActions from '../actions/notes';
import * as Strings from '../constants/strings';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  allNotes: state.notes
});

const mapDispatchToProps = dispatch => ({
  onCreateNote(laneId) {
    const newNote = NoteActions.createNote(Strings.NEW_TASK);

    dispatch(newNote);
    dispatch(LaneActions.attachToLane(laneId, newNote.payload.id));
  },
  onDeleteNote(laneId, noteId) {
    dispatch(NoteActions.deleteNote(noteId));

    if (laneId) {
      dispatch(LaneActions.detachFromLane(laneId, noteId));
    }
  },
  onEditNote(noteId, value) {
    const updatedNote = {
      id: noteId
    };

    if (value) {
      updatedNote.task = value;
      updatedNote.isEditing = false;
    } else {
      updatedNote.isEditing = true;
    }
    dispatch(NoteActions.updateNote(updatedNote));
  },
  onMoveNote(sourceId, targetId) {
    dispatch(LaneActions.move('note', sourceId, targetId));
  },
  attachToLane(laneId, noteId) {
    dispatch(LaneActions.attachToLane(laneId, noteId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Lane);
