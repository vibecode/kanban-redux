import React from 'react';

const noteSource = {
    beginDrag(props) {
      const { id } = props;
      return { id };
    }
};

export default ({ task, onDelete, children, ...props }) => (
    <div {...props}>
      {children}
    </div>
);
