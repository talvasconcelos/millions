import React from 'react'

function Loader(props) {
    return props.show ? (
        <div className='overlay'>
          <div className='leftEye'></div>
          <div className='rightEye'></div>
          <div className='mouth'></div>
          <p>The Universe is aligning. Please wait...</p>
        </div>
    ) : null
}

export default Loader
