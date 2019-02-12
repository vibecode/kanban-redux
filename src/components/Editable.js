import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import PropTypes from 'prop-types'
import styles from './Editable.module.css'

class Editable extends Component {
  static propTypes = {
    isEditing: PropTypes.bool,
    id: PropTypes.string.isRequired,
    onEdit: PropTypes.func.isRequired,
    onValueClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  }

  @autobind
  checkEnter(e) {
    if (e.key === 'Enter') {
      this.handleFinishEdit(e)
    }
  }

  @autobind
  handleFinishEdit(e) {
    const value = e.target.value

    if (this.props.onEdit && value.trim()) {
      this.props.onEdit(this.props.id, value)
    }
  }

  @autobind
  handleValueClick() {
    this.props.onValueClick(this.props.id)
  }

  renderEdit() {
    return (
      <input
        className={styles.input}
        ref={e => (e ? (e.selectionEnd = this.props.value.length) : null)}
        type="text"
        autoFocus={true}
        defaultValue={this.props.value}
        onBlur={this.handleFinishEdit}
        onKeyPress={this.checkEnter}
      />
    )
  }

  renderValue() {
    return (
      <div className={styles.valueContainer} onClick={this.handleValueClick}>
        <span>{this.props.value}</span>
      </div>
    )
  }

  render() {
    const { isEditing } = this.props
    return <div>{isEditing ? this.renderEdit() : this.renderValue()}</div>
  }
}

export default Editable
