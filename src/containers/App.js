import React, { Component } from 'react';
import Lanes from '../components/Lanes';
import { connect } from 'react-redux';
import lanesActions from '../actions/lanes';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import autobind from 'autobind-decorator';
import './App.css';

class App extends Component {

  render() {
    return (
        <div>
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
    return null;
  },
  onEditLane() {
    return null;
  },
  onDeleteLane() {
    return null;
  },
  onMoveLane() {
    return null;
  }
});

export default DragDropContext(HTML5Backend)(connect(mapStateToProps, mapDispatchToProps)(App));
