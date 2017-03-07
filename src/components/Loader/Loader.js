import React from 'react'

function Loader(props) {
  if (props.isLoading)
    return (
        <div className='overlay'>
          <div className='leftEye'></div>
          <div className='rightEye'></div>
          <div className='mouth'></div>
          <p>The Universe is aligning. Please wait...</p>
        </div>
    )
  return null
}

export default Loader
