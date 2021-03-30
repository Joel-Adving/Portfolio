import React from 'react'

const Background = () => {
  return (
    <video
      autoPlay
      loop
      muted
      class="object-cover w-screen h-screen fixed opacity-40"
    >
      <source src="background.mp4" type="video/mp4" />
      Your browser does not support the video tag
    </video>
  )
}

export default Background
