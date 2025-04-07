import { Spin } from 'antd'
import React from 'react'

const Loading = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(255,255,255,0.7)',
        zIndex: 1001,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spin />
    </div>
  )
}

export default Loading