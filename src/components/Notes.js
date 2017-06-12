import React, { Component } from 'react';
import Note from './Note';
import Editable from './Editable';
import PropTypes from 'prop-types';

class Notes extends Component {
  static propTypes = {
    notes: PropTypes.array.isRequired,
    onDeleteNote: PropTypes.func.isRequired,
    onEditNote: PropTypes.func.isRequired,
    onMoveNote: PropTypes.func.isRequired,
    onValueClick: PropTypes.func.isRequired,
  };

  render() {
    const { notes, onValueClick, onEdit, onDelete } = this.props;

    return (
        <ul>
          {notes.map(({ id, task, isEditing }) =>
              <Note
                  key={id}
                  id={id}
                  onMove={({ sourceId, targetId }) =>
                      console.log(`source: ${sourceId}, target: ${targetId}`)}>
                <Editable isEditing={isEditing}
                          id={id}
                          value={task}
                          onValueClick={onValueClick}
                          onEdit={onEdit}
                          onDelete={onDelete} />
              </Note>
          )}
        </ul>
    );
  }
}

export default (Notes);
