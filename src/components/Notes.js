import React, { Component } from 'react';

import { connect } from 'react-redux';
import Note from './Note';
import Editable from './Editable';

class Notes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { notes, onValueClick, onEdit, onDelete } = this.props;

    return (
        <ul>
          {notes.map(({ id, task, isEditing }) =>
                <Note key={id}>
                  <Editable isEditing={isEditing}
                            value={task}
                            onValueCLick={onValueClick.bind(null, id)}
                            onEdit={onEdit.bind(null, id)}
                            onDelete={onDelete.bind(null, id)} />
                </Note>
          )}
        </ul>
    );
  }
}

export default connect()(Notes);
