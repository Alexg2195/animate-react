'use strict';

module.exports = function (styleSheet, animation) {
  var animationKeyframe = '@keyframes ' + animation.name + ' {\n      from {\n        opacity: 1;\n      }\n\n      to {\n        opacity: 0;\n      }\n    }';

  var animationClass = '.' + animation.name + ' {\n      animation-name: ' + animation.name + ';\n      animation-duration: ' + (animation.duration || '4s') + ';\n    }';

  styleSheet.insertRule(animationKeyframe, 0);
  styleSheet.insertRule(animationClass, 0);
};