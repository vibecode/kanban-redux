import React, { Component } from 'react';
import autobind from 'autobind-decorator';

export default ({ isEditing, value, onEdit, ...props }) => {
  if (isEditing) {
    return <Edit value={value}
                 onEdit={onEdit}
                 {...props} />
  }

  return <span {...props}>{value}</span>
}

class Edit extends Component {
  @autobind
  checkEnter(e) {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  @autobind
  finishEdit(e) {
    const value = e.target.value;

    if(this.props.onEdit) {
      this.props.onEdit(value);
    }
  }

  render() {
    const { value, onEdit, ...props } = this.props;

    return <input
        type="text"
        autoFocus={true}
        defaultValue={value}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
        {...props} />
  }
}
