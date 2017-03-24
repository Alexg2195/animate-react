'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Animator = function (_React$Component) {
  _inherits(Animator, _React$Component);

  function Animator(props) {
    _classCallCheck(this, Animator);

    var _this = _possibleConstructorReturn(this, (Animator.__proto__ || Object.getPrototypeOf(Animator)).call(this));

    if (props.children && props.animations) {
      var animations = props.animations;
      animations.forEach(function (animation, index) {
        animations[index].id = 'animation-' + Math.random().toString().slice(2);
      });
      _this.state = {
        animations: animations,
        scopedAnimations: true
      };
    } else {
      _this.state = {
        animations: props.animations,
        scopedAnimations: false
      };
    }
    return _this;
  }

  _createClass(Animator, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _state = this.state,
          animations = _state.animations,
          scopedAnimations = _state.scopedAnimations;


      if (animations) {
        var styleSheet = document.styleSheets[0];
        if (!styleSheet) {
          throw new Error('To use the Animator component you need a linked stylesheet!');
        }

        animations.forEach(function (animation) {
          if (typeof animation.name != 'string' || animation.name === '') {
            throw new TypeError('Expected animation.name to be a non empty string, recevied ' + animation.name + '.');
          }
          if (typeof animation.type != 'function') {
            throw new TypeError('Expected animation.type to be a animation function, recevied ' + animation.type + '.');
          }
          animation.type(styleSheet, animation);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var play = this.props.play;
      var _state2 = this.state,
          animations = _state2.animations,
          scopedAnimations = _state2.scopedAnimations;

      var animationToPlay = '';

      console.log(animations);

      // Search for scoped animation first
      if (scopedAnimations && animations) {
        animations.forEach(function (animation) {
          if (animation.name === play) {
            animationToPlay = animation.id;
          }
        });
      }
      // If no scoped animation that matches go to globals
      if (animationToPlay === '') {
        animationToPlay = play;
      }
      console.log(animationToPlay);

      return _react2.default.createElement(
        'div',
        { className: animationToPlay },
        this.props.children
      );
    }
  }]);

  return Animator;
}(_react2.default.Component);

exports.default = Animator;


Animator.propTypes = {
  animations: _react2.default.PropTypes.array,
  play: _react2.default.PropTypes.string
};