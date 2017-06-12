import React, { Component } from 'react';
import Note from './Note';
import Editable from './Editable';

class Notes extends Component {

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
