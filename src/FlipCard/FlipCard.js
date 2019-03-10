import React from 'react'
import classes from './FlipCard.module.css'
import propTypes from 'prop-types'
/*
receives front and back JSX to render anything
*/
const FlipCard = (props) => {
  if (!props.direction) {
    return null
  }
  let flipContainerClass = ''
  let flipperClass = ''
  let frontClass = ''
  let backClass = ''
  if (props.direction === 'horizontal') {
    flipContainerClass = classes.FlipContainerY
    flipperClass = classes.FlipperY
    frontClass = [classes.Front, classes.FrontY].join(' ')
    backClass = [classes.Back, classes.BackY].join(' ')
  }
  if (props.direction === 'vertical') {
    flipContainerClass = classes.FlipContainerX
    flipperClass = classes.FlipperX
    frontClass = [classes.Front, classes.FrontX].join(' ')
    backClass = [classes.Back, classes.BackX].join(' ')
  }

  return (
    <div
      className={[flipContainerClass, props.containerClass].join(' ')}
      style={{
        ...props.style,
        width: props.width,
        height: props.height,
        margin: props.margin
      }}
    >
      <div
        className={flipperClass}
        style={{ transition: props.flipSpeed ? props.flipSpeed : '600ms' }}
      >
        <div
          className={[frontClass, props.frontClass].join(' ')}
          style={{
            height: props.height,
            ...props.frontStyle
          }}
        >
          {props.front}
        </div>
        <div
          className={[backClass, props.backClass].join(' ')}
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
  direction: propTypes.string,
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
