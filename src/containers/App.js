import React, { Component } from 'react';
import Lanes from '../components/Lanes';
import { connect } from 'react-redux';
import * as LaneActions from '../actions/lanes';
import * as Strings from '../constants/strings';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import PropTypes from 'prop-types';
import styles from './App.css';

class App extends Component {
  static propTypes = {
    lanes: PropTypes.array.isRequired,
    onCreateLane: PropTypes.func.isRequired,
    onDeleteLane: PropTypes.func.isRequired,
    onEditLane: PropTypes.func.isRequired,
    onMoveLane: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
  };

  render() {
    return (
        <div>
          <div className={styles.topContainer}>
            <button className={styles.addLane} onClick={this.props.onCreateLane}>+ Add column</button>
          </div>
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
    dispatch(LaneActions.createLane(Strings.NEW_COLUMN));
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

    dispatch(LaneActions.updateLane(updatedLane));
  },
  onDeleteLane(laneId) {
    dispatch(LaneActions.deleteLane(laneId));
  },
  onMoveLane(sourceId, targetId) {
     dispatch(LaneActions.move('lane', sourceId, targetId));
  }
});

export default DragDropContext(HTML5Backend)(connect(mapStateToProps, mapDispatchToProps)(App));
