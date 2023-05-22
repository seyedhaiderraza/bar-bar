import React, { useState } from 'react'

const ProgressBar = (props) => {
    
  return (
    <div>
      <div className='progress-Bar'>
        <div className='bar-filled' style={{width:`${props.filled}%`}}>
            <span>{props.filled}%</span>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
