import React from 'react'

function Loader() {
    return (
        <div className='overlay'>
          <div className='leftEye'></div>
          <div className='rightEye'></div>
          <div className='mouth'></div>
          <p>The Universe is aligning. Please wait...</p>
        </div>
    )
}

export default Loader
