import React from 'react';

const Input = ({id, type, name, placeholder}) => {
  return (
    <input
      className={
        type === 'date'?
        'inputDate':
        type === 'checkbox'||type === 'radio'?
        'inputCheckForm':
        type === 'file'?
        'inputFile':
        'inputForm'
      }
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  )
}

export default Input;