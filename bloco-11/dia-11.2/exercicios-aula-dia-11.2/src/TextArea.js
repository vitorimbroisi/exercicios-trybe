import React from "react";

class TextArea extends React.Component{
  render() {
    const { value, handleChange } = this.props

    let error = undefined
    if(value.length > 3) 
      error = "texto muito grande! (reduza o texto)"

    return(
      <label>
      label teste 1:
      <textarea name='teste1' type='text' value={value} onChange={handleChange} />
      <span> {error !== undefined ? error : '' } </span>
    </label>
    )
  }
}

export default TextArea;