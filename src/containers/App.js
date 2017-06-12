import React, { Component } from 'react';
import Lanes from '../components/Lanes';
import { connect } from 'react-redux';
import * as laneActions from '../actions/lanes';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import autobind from 'autobind-decorator';
import './App.css';

class App extends Component {

  render() {
    return (
        <div>
          <button className="add-lane" onClick={this.props.onCreateLane}>add lane</button>
          <Lanes lanes={this.props.lanes}
                 onEditLane={this.props.onEditLane}
                 onDeleteLane={this.props.onDeleteLane}
                 onMoveLane={this.props.onMoveLane} />
        </div>
    );
  }
}

const mapStateToProps = state => ({ lanes: state.lanes });

const mapDispatchToProps = dispatch => ({
  onCreateLane() {
    dispatch(laneActions.createLane('New lane'));
  },
  onEditLane(laneId, name) {
    const updatedLane = {
      id: laneId,
    };

    if(name) {
      updatedLane.name = name;
      updatedLane.isEditing = false;
    } else {
      updatedLane.isEditing = true;
    }

    dispatch(laneActions.updateLane(updatedLane));
  },
  onDeleteLane(laneId) {
    dispatch(laneActions.deleteLane(laneId));
  },
  onMoveLane() {
    return null;
  }
});

export default DragDropContext(HTML5Backend)(connect(mapStateToProps, mapDispatchToProps)(App));
