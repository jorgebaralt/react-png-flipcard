import React from 'react'
import classes from './FlipCard.module.css'
import propTypes from 'prop-types'
/*
receives front and back JSX to render anything
*/
const FlipCard = (props) => {
  return (
    <div
      className={[classes.FlipContainer, props.containerClass].join(' ')}
      style={{
        ...props.style,
        width: props.width,
        height: props.height,
        margin: props.margin
      }}
    >
      <div
        className={classes.Flipper}
        style={{ transition: props.flipSpeed ? props.flipSpeed : '600ms' }}
      >
        <div
          className={[classes.Front, props.frontClass].join(' ')}
          style={{
            height: props.height,
            ...props.frontStyle
          }}
        >
          {props.front}
        </div>
        <div
          className={[classes.Back, props.backClass].join(' ')}
          style={{
            height: props.height,
            ...props.backStyle
          }}
        >
          {props.back}
        </div>
      </div>
    </div>
  )
}

FlipCard.propTypes = {
  front: propTypes.any,
  back: propTypes.any,
  style: propTypes.any,
  backStyle: propTypes.any,
  frontStyle: propTypes.any,
  containerClass: propTypes.any,
  frontClass: propTypes.any,
  backClass: propTypes.any,
  flipSpeed: propTypes.number,
  height: propTypes.number,
  width: propTypes.number,
  margin: propTypes.number
}

export default FlipCard
