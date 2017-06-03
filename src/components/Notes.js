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
          {notes.map(({id, task}) =>
              <li key={id}>
                <Note
                  task={task}
                  onDelete={onDelete.bind(null, id)} />
              </li>
          )}
        </ul>
    );
  }
}

export default connect()(Notes);
