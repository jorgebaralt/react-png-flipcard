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
    flipperClass = [classes.FlipperY]
    frontClass = [classes.Front, classes.FrontY].join(' ')
    backClass = [classes.Back, classes.BackY].join(' ')
    if (props.manual) {
      flipperClass = [classes.FlipperYManual0]
      if (props.flip === true) {
        flipperClass.push(classes.FlipperYManual180)
      }
    }
  }
  if (props.direction === 'vertical') {
    flipContainerClass = classes.FlipContainerX
    flipperClass = [classes.FlipperX]
    frontClass = [classes.Front, classes.FrontX].join(' ')
    backClass = [classes.Back, classes.BackX].join(' ')
    if (props.manual) {
      flipperClass = [classes.FlipperXManual0]
      if (props.flip === true) {
        flipperClass.push(classes.FlipperXManual180)
      }
    }
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
        className={flipperClass.join(' ')}
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
  margin: propTypes.number,
  manual: propTypes.bool,
  flip: propTypes.bool
}

FlipCard.defaultProps = {
  direction: 'horizontal',
  height: 300,
  width: 300,
  front: <div> Front content here</div>,
  back: <div>Back content here</div>,
  margin: 0
}

export default FlipCard
