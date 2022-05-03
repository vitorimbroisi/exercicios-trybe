import React from "react";

class Estado extends React.Component{
  render() {
    const {value, handleChange} = this.props

    return (
      <label> Estado:
        <select 
        name="estado"
        value={value}
        onChange={handleChange}
        >
          <option>RJ</option>
          <option>SP</option>
          <option>ES</option>
          <option>MG</option>
          <option>AC</option>
          <option>RS</option>
          <option>MT</option>
        </select>
      </label>
    )
  }
}

export default Estado;