import Lane from '../components/Lane';
import lanesActions from '../actions/lanes';
import notesActions from '../actions/notes';
import {connect} from 'react-redux';
import {DragSource} from 'react-dnd';
import {DropTarget} from 'react-dnd';
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
  onAddNote(laneId) {

  },
  onDeleteNote(laneId, noteId) {

  },
  onEditNote(noteId, value) {

  },
  onMoveNote(sourceId, targetId) {

  },
  attachToLane(laneId, noteId) {

  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Lane);