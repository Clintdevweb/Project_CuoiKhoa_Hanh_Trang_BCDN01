import React, { useState } from 'react';
import CountUp, { startAnimation } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default function CountupNumber(props) {

  const [countUp, setCountUp] = useState(false)

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setCountUp({ countUp: true });
    }
  }

  return (
    <>
      <VisibilitySensor onChange={onVisibilityChange} offset={{
        top:
          10
      }} delayedCall>
        <CountUp start={0} end={countUp ? props.end : 0}
          suffix="" duration={5} />
      </VisibilitySensor>
    </>
  )
}






