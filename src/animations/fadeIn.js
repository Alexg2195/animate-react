module.exports = function(styleSheet, animation) {
  let animationKeyframe =
    `@keyframes ${animation.name} {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }`

  let animationClass =
    `.${animation.name} {
      animation-name: ${animation.name};
      animation-duration: ${animation.duration || '4s'};
    }`

  styleSheet.insertRule(animationKeyframe, 0)
  styleSheet.insertRule(animationClass, 0)

}
