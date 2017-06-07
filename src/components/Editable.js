import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import PropTypes from 'prop-types';

class Editable extends Component {
  @autobind
  checkEnter(e) {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  @autobind
  finishEdit(e) {
    const value = e.target.value;

    if (this.props.onEdit && value.trim()) {
      this.props.onEdit(value);
    }
  }

  renderEdit() {
    return <input
        //set selection to the end
        ref={e => e ? e.selectionEnd = this.props.value.length : null}
        type="text"
        autoFocus={true}
        defaultValue={this.props.value}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter} />
  }

  renderValue() {
    const onDelete = this.props.onDelete;

    return (
        <div onClick={this.props.onValueClick}>
          <span>{this.props.value}</span>
          {onDelete ? this.renderDelete() : null}
        </div>
    )
  }

  renderDelete() {
    return <button onClick={this.props.onDelete}>X</button>
  }

  render() {
    const { isEditing } = this.props;

    return (
        <div>
          {isEditing ? this.renderEdit() : this.renderValue()}
        </div>
    )
  }
}

export default Editable;

