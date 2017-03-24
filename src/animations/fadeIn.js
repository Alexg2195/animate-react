module.exports = (styleSheet, animation) => {
  let animationName = animation.id || animation.name

  let animationKeyframe =
    `@keyframes ${animationName} {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }`

  let animationClass =
    `.${animationName} {
      animation-name: ${animationName};
      animation-duration: ${animation.duration || '4s'};
    }`

  styleSheet.insertRule(animationKeyframe, 0)
  styleSheet.insertRule(animationClass, 0)

}
