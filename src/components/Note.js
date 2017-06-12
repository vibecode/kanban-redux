import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import * as itemTypes from '../constants/itemTypes';

const noteSource = {
  beginDrag(props) {
    return {
      id: props.id
    }
  },
  isDragging(props, monitor) {
    return props.id === monitor.getItem().id;
  }
};

const noteTarget = {
  hover(targetProps, monitor) {
    const targetId = targetProps.id;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;

    if (sourceId !== targetId) {
      targetProps.onMoveNote({ sourceId, targetId });
    }
  }
};

@DragSource(itemTypes.NOTE, noteSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
@DropTarget(itemTypes.NOTE, noteTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget()
}))
class Note extends Component {
  static propTypes = {
    children: PropTypes.node,
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isDragging: PropTypes.bool,
    onMove: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
  };

  render() {
    const {
      connectDragSource,
      connectDropTarget,
      isDragging,
      children,
    } = this.props;

    return connectDragSource(
        connectDropTarget(
            <li style={{ opacity: isDragging ? 0.3 : 1 }}>{children}</li>
        )
    );
  }
}

export default Note;