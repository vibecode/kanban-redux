import React, { Component } from 'react';

export default ({ task, onDelete, children, ...props }) => (
    <div {...props}>
      {children}
    </div>
);
