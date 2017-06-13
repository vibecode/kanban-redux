import React, { Component } from 'react';
import Note from './Note';
import Editable from './Editable';
import PropTypes from 'prop-types';
import styles from './Notes.css';

class Notes extends Component {
  static propTypes = {
    notes: PropTypes.array.isRequired,
    onDeleteNote: PropTypes.func.isRequired,
    onEditNote: PropTypes.func.isRequired,
    onMoveNote: PropTypes.func.isRequired,
    onValueClick: PropTypes.func.isRequired,
  };

  render() {
    const { notes, onValueClick, onEditNote, onDeleteNote, onMoveNote } = this.props;

    return (
        <ul className={styles.notesList}>
          {notes.map(({ id, task, isEditing }) =>
              <Note
                  key={id}
                  id={id}
                  onDeleteNote={onDeleteNote}
                  onMoveNote={onMoveNote}>
                <Editable
                    isEditing={isEditing}
                    id={id}
                    value={task}
                    onValueClick={onValueClick}
                    onEdit={onEditNote} />
              </Note>
          )}
        </ul>
    );
  }
}

export default (Notes);
