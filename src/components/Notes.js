import React, { Component } from 'react';

import { connect } from 'react-redux';
import Note from './Note';
import Editable from './Editable';

class Notes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { notes, onNoteClick, onEdit, onDelete } = this.props;

    return (
        <ul>
          {notes.map(({ id, task, isEditing }) =>
              <li key={id}>
               <Note onClick={onNoteClick.bind(null, id)}>
                 <Editable isEditing={isEditing}
                           value={task}
                           onEdit={onEdit.bind(null, id)}
                           onDelete={onDelete.bind(null, id)} />
               </Note>
              </li>
          )}
        </ul>
    );
  }
}

export default connect()(Notes);
