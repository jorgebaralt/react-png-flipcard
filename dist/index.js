'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var propTypes = _interopDefault(require('prop-types'));

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

var css = "/* entire container, keeps perspective */\n.FlipCard-module_FlipContainerY__1pdXA,\n.FlipCard-module_FlipContainerX__3uH5s {\n  perspective: 1000px;\n  background-color: transparent;\n}\n\n/* flip the pane when hovered */\n.FlipCard-module_FlipContainerY__1pdXA:hover .FlipCard-module_FlipperY__2DYWx {\n  transform: rotateY(180deg);\n}\n\n.FlipCard-module_FlipContainerX__3uH5s:hover .FlipCard-module_FlipperX__3W83J {\n  transform: rotateX(180deg);\n}\n\n.FlipCard-module_FlipContainerX__3uH5s,\n.FlipCard-module_FlipContainerY__1pdXA,\n.FlipCard-module_Front__2UuOq,\n.FlipCard-module_Back__1uX_Z {\n  width: 100%;\n}\n\n/* flip speed goes here */\n.FlipCard-module_FlipperX__3W83J,\n.FlipCard-module_FlipperY__2DYWx {\n  transition: 0.6s;\n  transform-style: preserve-3d;\n  position: relative;\n}\n\n/* hide back of pane during swap */\n.FlipCard-module_Front__2UuOq,\n.FlipCard-module_Back__1uX_Z {\n  backface-visibility: hidden;\n  top: 0;\n  left: 0;\n}\n\n/* front pane, placed above back */\n.FlipCard-module_FrontX__2IOV1 {\n  position: relative;\n  z-index: 2;\n  transform: rotateX(0deg);\n}\n\n/* back, initially hidden pane */\n.FlipCard-module_BackX__26JYx {\n  transform: rotateX(180deg);\n  position: absolute;\n}\n/* front pane, placed above back */\n.FlipCard-module_FrontY__JkTjP {\n  position: absolute;\n  z-index: 2;\n  transform: rotateY(0deg);\n}\n\n/* back, initially hidden pane */\n.FlipCard-module_BackY__3h5m3 {\n  position: absolute;\n  transform: rotateY(180deg);\n}\n";
var classes = { "FlipContainerY": "FlipCard-module_FlipContainerY__1pdXA", "FlipContainerX": "FlipCard-module_FlipContainerX__3uH5s", "FlipperY": "FlipCard-module_FlipperY__2DYWx", "FlipperX": "FlipCard-module_FlipperX__3W83J", "Front": "FlipCard-module_Front__2UuOq", "Back": "FlipCard-module_Back__1uX_Z", "FrontX": "FlipCard-module_FrontX__2IOV1", "BackX": "FlipCard-module_BackX__26JYx", "FrontY": "FlipCard-module_FrontY__JkTjP", "BackY": "FlipCard-module_BackY__3h5m3" };
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
  if (!props.direction) {
    return null;
  }
  var flipContainerClass = '';
  var flipperClass = '';
  var frontClass = '';
  var backClass = '';
  if (props.direction === 'horizontal') {
    flipContainerClass = classes.FlipContainerY;
    flipperClass = classes.FlipperY;
    frontClass = [classes.Front, classes.FrontY].join(' ');
    backClass = [classes.Back, classes.BackY].join(' ');
  }
  if (props.direction === 'vertical') {
    flipContainerClass = classes.FlipContainerX;
    flipperClass = classes.FlipperX;
    frontClass = [classes.Front, classes.FrontX].join(' ');
    backClass = [classes.Back, classes.BackX].join(' ');
  }

  return React.createElement(
    'div',
    {
      className: [flipContainerClass, props.containerClass].join(' '),
      style: _extends({}, props.style, {
        width: props.width,
        height: props.height,
        margin: props.margin
      })
    },
    React.createElement(
      'div',
      {
        className: flipperClass,
        style: { transition: props.flipSpeed ? props.flipSpeed : '600ms' }
      },
      React.createElement(
        'div',
        {
          className: [frontClass, props.frontClass].join(' '),
          style: _extends({
            height: props.height
          }, props.frontStyle)
        },
        props.front
      ),
      React.createElement(
        'div',
        {
          className: [backClass, props.backClass].join(' '),
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
};

module.exports = FlipCard;
//# sourceMappingURL=index.js.map
