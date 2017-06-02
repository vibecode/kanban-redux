import React, { Component } from 'react';

import { connect } from 'react-redux';
import Note from './Note';

class Notes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { notes, onValueClick, onEdit, onDelete } = this.props;
    return (
        <ul>
          {notes.map(note =>
              <li key={note.id}><Note
                  task={note.task}
                  onDelete={} />
              </li>
          )}
        </ul>
    );
  }
}

export default connect(null, { move })(Notes);
