// import { highlight } from 'sugar-high';
import React from 'react';

export function Badge(props) {
  const borderColor = props.bordercolor || 'neutral';
  const bgColor = props.bgcolor || 'neutral';
  const textColor = props.textcolor || 'neutral';
  const className = `border border-${borderColor}-200 dark:border-${borderColor}-700 bg-${bgColor}-50 dark:bg-${bgColor}-800 rounded p-1 text-sm inline-flex items-center leading-4 text-${textColor}-900 dark:text-${textColor}-100 no-underline`;
  return (
    <a
      {...props}
      target="_blank"
      className={className + (props.className ? ' ' + props.className : '')}
    />
  );
}
