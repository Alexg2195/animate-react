'use strict';

module.exports = function (styleSheet, animation) {
  var animationName = animation.id || animation.name;

  var animationKeyframe = '@keyframes ' + animationName + ' {\n      from {\n        opacity: 0;\n      }\n\n      to {\n        opacity: 1;\n      }\n    }';

  var animationClass = '.' + animationName + ' {\n      animation-name: ' + animationName + ';\n      animation-duration: ' + (animation.duration || '4s') + ';\n    }';

  styleSheet.insertRule(animationKeyframe, 0);
  styleSheet.insertRule(animationClass, 0);
};