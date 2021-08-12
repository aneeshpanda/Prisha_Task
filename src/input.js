import React from 'react';



export default function Input(props) {
  console.log(props)
    return (
      <div className="input">
        <label htmlFor={props.label} className="block text-md font-medium text-white">
          {props.label}
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            name={props.label}
            id={props.label}
            className="block w-full pl-1 mb-5 pr-1 sm:text-sm border-white bg-white rounded-md"
          />
        </div>
      </div>
    )
  }