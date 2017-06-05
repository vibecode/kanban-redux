import React, { Component } from 'react';

export default ({ isEditing, value, onEdit, ...props }) => {
  if (isEditing) {
    return <Edit value={value}
                 onEdit={onEdit}
                 {...props} />
  }

  return <span {...props}>value: {value}</span>
}

const Edit = ({onEdit = () => null, value, ...props}) => (
  <div onClick={onEdit} {...props}>
    <span>edit: value</span>
  </div>
);