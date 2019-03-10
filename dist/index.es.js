import React from 'react';
import propTypes from 'prop-types';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/* entire container, keeps perspective */\n.FlipCard-module_FlipContainer__1aimw {\n  perspective: 1000px;\n  background-color: transparent;\n}\n/* flip the pane when hovered */\n.FlipCard-module_FlipContainer__1aimw:hover .FlipCard-module_Flipper__DLIcr {\n  transform: rotateY(180deg);\n}\n\n.FlipCard-module_FlipContainer__1aimw,\n.FlipCard-module_Front__2UuOq,\n.FlipCard-module_Back__1uX_Z {\n  width: 100%;\n}\n\n/* flip speed goes here */\n.FlipCard-module_Flipper__DLIcr {\n  transition: 0.6s;\n  transform-style: preserve-3d;\n  position: relative;\n}\n\n/* hide back of pane during swap */\n.FlipCard-module_Front__2UuOq,\n.FlipCard-module_Back__1uX_Z {\n  backface-visibility: hidden;\n\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n/* front pane, placed above back */\n.FlipCard-module_Front__2UuOq {\n  z-index: 2;\n  transform: rotateY(0deg);\n}\n\n/* back, initially hidden pane */\n.FlipCard-module_Back__1uX_Z {\n  transform: rotateY(180deg);\n}\n";
var classes = { "FlipContainer": "FlipCard-module_FlipContainer__1aimw", "Flipper": "FlipCard-module_Flipper__DLIcr", "Front": "FlipCard-module_Front__2UuOq", "Back": "FlipCard-module_Back__1uX_Z" };
styleInject(css);

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/*
receives front and back JSX to render anything
*/
var FlipCard = function FlipCard(props) {
  return React.createElement(
    'div',
    {
      className: [classes.FlipContainer, props.containerClass].join(' '),
      style: _extends({}, props.style, {
        width: props.width,
        height: props.height,
        margin: props.margin
      })
    },
    React.createElement(
      'div',
      {
        className: classes.Flipper,
        style: { transition: props.flipSpeed ? props.flipSpeed : '600ms' }
      },
      React.createElement(
        'div',
        {
          className: [classes.Front, props.frontClass].join(' '),
          style: _extends({
            height: props.height
          }, props.frontStyle)
        },
        props.front
      ),
      React.createElement(
        'div',
        {
          className: [classes.Back, props.backClass].join(' '),
          style: _extends({
            height: props.height
          }, props.backStyle)
        },
        props.back
      )
    )
  );
};

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
};

export default FlipCard;
//# sourceMappingURL=index.es.js.map
