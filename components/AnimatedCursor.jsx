"use client"
import AnimatedCursor from "react-animated-cursor"

export const AnimatedCursor = () => {
  return (
    <div>
      <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='#ccc'
      clickables={[
        'button',
        '.link'
      ]}
    />
    </div>
  )
}

export default AnimatedCursor
