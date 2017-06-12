import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import PropTypes from 'prop-types';

class Editable extends Component {
  static propTypes = {
    isEditing: PropTypes.bool,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func.isRequired,
    onValueClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  };

  @autobind
  checkEnter(e) {
    if (e.key === 'Enter') {
      this.handleFinishEdit(e);
    }
  }

  @autobind
  handleFinishEdit(e) {
    const value = e.target.value;

    if (this.props.onEdit && value.trim()) {
      this.props.onEdit(this.props.id, value);
    }
  }

  @autobind
  handleValueClick() {
    this.props.onValueClick(this.props.id);
  }

  @autobind
  handleDelete() {
    this.props.onDelete(this.props.id);
  }

  renderEdit() {
    return (
        <input
            ref={e => e ? e.selectionEnd = this.props.value.length : null}
            type="text"
            autoFocus={true}
            defaultValue={this.props.value}
            onBlur={this.handleFinishEdit}
            onKeyPress={this.checkEnter} />
    )
  }

  renderValue() {
    const onDelete = this.props.onDelete;

    return (
        <div onClick={this.handleValueClick}>
          <span>{this.props.value}</span>
          {onDelete ? this.renderDelete() : null}
        </div>
    )
  }

  renderDelete() {
    return <button onClick={this.handleDelete}>X</button>
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
