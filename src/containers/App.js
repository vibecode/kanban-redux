import React, { Component } from 'react';
import Notes from '../components/Notes';
import uuid from 'uuid';
import autobind from 'autobind-decorator';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Make Nothambria great again'
        }
      ]
    }
  }

  @autobind
  addNote() {
    this.setState(
        {
          notes: [
            ...this.state.notes,
            { id: uuid.v4(), task: 'new task' }
          ]
        }
    )
  }

  @autobind
  deleteNote(id, e) {
    //avoid bubbling to edit
    e.stopPropagation();

    const { notes } = this.state

    this.setState({
      notes: notes.filter(note => note.id !== id)
    });
  }

  @autobind
  activateEditingMode(id) {
    const { notes } = this.state;

    this.setState({
      notes: notes.map(note => {
        if (note.id === id) {
          note.isEditing = true;
        }

        return note;
      })
    })
  }

  @autobind
  editNote(id, task) {
    const { notes } = this.state;

    this.setState({
      notes: notes.map(note => {
        if (note.id === id) {
          note.isEditing = false;
          note.task = task;
        }

        return note;
      })
    })
  }

  render() {
    const { notes } = this.state;

    return (
        <div>
          <button onClick={this.addNote}>+</button>
          <Notes notes={notes}
                 onDelete={this.deleteNote}
                 onNoteClick={this.activateEditingMode}
                 onEdit={this.editNote} />
        </div>
    );
  }
}

export default App;
