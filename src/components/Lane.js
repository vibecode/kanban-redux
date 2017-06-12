import React, { Component } from 'react';
import Notes from './Notes';
import Editable from './Editable';
import autobind from 'autobind-decorator'
import PropTypes from 'prop-types';

class Lane extends Component {
  static propTypes = {
    lane: PropTypes.object.isRequired,
    allNotes: PropTypes.array.isRequired,
    // connectDragSource: PropTypes.func.isRequired,
    // connectDropTarget: PropTypes.func.isRequired,
    // connectDragPreview: PropTypes.func.isRequired,
    onCreateNote: PropTypes.func.isRequired,
    onEditNote: PropTypes.func.isRequired,
    onEditLane: PropTypes.func.isRequired,
    onDeleteNote: PropTypes.func.isRequired,
    onMove: PropTypes.func.isRequired
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
      onMove,
      connectDragSource,
      connectDropTarget,
      connectDragPreview,
    } = this.props;

    const laneNotes = lane.notes
                          .map(id => allNotes.find(note => note.id === id))
                          .filter(note => note);
    return (
        <div className="lane">
          <h2 className="lane-header">
            <Editable
                id={lane.id}
                isEditing={lane.isEditing}
                value={lane.name}
                onEdit={onEditLane}
                onValueClick={onEditLane} />

            <button className="lane-delete"
                    onClick={this.handleDeleteLane}>
              X
            </button>

            {/*{connectDragSource(<button className="lane-drag-btn" />)}*/}
          </h2>

          <Notes
              notes={laneNotes}
              onValueClick={onEditNote}
              onEdit={onEditNote}
              onDelete={this.handleDeleteNote}
              onMove={onMove} />
          <button className="add-note"
                  onClick={this.handleCreateNote}>
            +
          </button>
        </div>
    );
  }
}

export default Lane;
