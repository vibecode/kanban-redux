import React, { Component } from 'react';
import Notes from './Notes';
import Editable from './Editable';
import autobind from 'autobind-decorator';
import { DragSource } from 'react-dnd';
import { DropTarget } from 'react-dnd';
import * as itemTypes from '../constants/itemTypes';
import PropTypes from 'prop-types';
import styles from './Lane.css';

const laneSource = {
  beginDrag(props) {
    return {
      id: props.lane.id
    };
  },
  isDragging(props, monitor) {
    return props.id === monitor.getItem().id;
  }
};

const laneTarget = {
  hover(targetProps, monitor) {
    const targetId = targetProps.lane.id;
    const notesLength = targetProps.lane.notes.length;
    const srcProps = monitor.getItem();
    const srcId = srcProps.id;
    const srcType = monitor.getItemType();

    if (!notesLength && srcType === itemTypes.NOTE) {
      targetProps.attachToLane(targetId, srcId);
    } else if (targetId !== srcId && srcType === itemTypes.LANE) {
      targetProps.onMoveLane(srcId, targetId);
    }
  }
};

@DragSource(itemTypes.LANE, laneSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
}))
@DropTarget([itemTypes.NOTE, itemTypes.LANE], laneTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
class Lane extends Component {
  static propTypes = {
    lane: PropTypes.object.isRequired,
    allNotes: PropTypes.array.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired,
    onCreateNote: PropTypes.func.isRequired,
    onEditNote: PropTypes.func.isRequired,
    onEditLane: PropTypes.func.isRequired,
    onDeleteNote: PropTypes.func.isRequired,
    onMoveNote: PropTypes.func.isRequired
  };

  @autobind
  handleCreateNote() {
    this.props.onCreateNote(this.props.lane.id);
  };

  @autobind
  handleDeleteNote(noteId) {
    this.props.onDeleteNote(this.props.lane.id, noteId);
  }

  @autobind
  handleDeleteLane() {
    const lane = this.props.lane;

    this.props.onDeleteLane(lane.id);
    lane.notes.forEach(noteId => this.props.onDeleteLane(null, noteId));
  }

  render() {
    const {
      lane,
      allNotes,
      onEditLane,
      onEditNote,
      onMoveNote,
      connectDragSource,
      connectDropTarget,
      connectDragPreview,
    } = this.props;

    const laneNotes = lane.notes
                          .map(id => allNotes.find(note => note.id === id))
                          .filter(note => note);
    return connectDragPreview(
        connectDropTarget(
            <div className={styles.lane}>
              <h2 className="lane-header">
                <Editable
                    id={lane.id}
                    isEditing={lane.isEditing}
                    value={lane.name}
                    onEdit={onEditLane}
                    onValueClick={onEditLane} />

                <button
                    className="lane-delete"
                    onClick={this.handleDeleteLane}>
                  X
                </button>

                {connectDragSource(<button className="lane-drag-btn">drag me</button>)}
              </h2>

              <Notes
                  notes={laneNotes}
                  onValueClick={onEditNote}
                  onEditNote={onEditNote}
                  onDeleteNote={this.handleDeleteNote}
                  onMoveNote={onMoveNote} />

              <button
                  className="add-note"
                  onClick={this.handleCreateNote}>
                +
              </button>
            </div>
        )
    );
  }
}

export default Lane;
