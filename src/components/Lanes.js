import React, { Component } from 'react'
import Lane from '../containers/Lane'
import PropTypes from 'prop-types'
import styles from './Lanes.module.css'

class Lanes extends Component {
  static propTypes = {
    lanes: PropTypes.array.isRequired,
    onEditLane: PropTypes.func.isRequired,
    onDeleteLane: PropTypes.func.isRequired,
    onMoveLane: PropTypes.func.isRequired
  }

  render() {
    const { onEditLane, onDeleteLane, onMoveLane } = this.props

    const lanes = this.props.lanes.map(lane => {
      return (
        <Lane
          key={lane.id}
          lane={lane}
          onEditLane={onEditLane}
          onDeleteLane={onDeleteLane}
          onMoveLane={onMoveLane}
        />
      )
    })

    return <div className={styles.lanes}>{lanes}</div>
  }
}

export default Lanes
