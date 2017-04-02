import React from 'react'


export default class Animator extends React.Component {

  constructor(props) {
    super()
    if (props.children && props.animations) {
      let animations = props.animations
      animations.forEach((animation, index) => {
        animations[index].id = `animation-${Math.random().toString().slice(2)}`
      })
      this.state = {
        animations: animations,
        scopedAnimations: true
      }
    } else {
      this.state = {
        animations: props.animations,
        scopedAnimations: false
      }
    }
  }

  componentWillMount() {
    const { animations, scopedAnimations } = this.state

    if ( animations ) {
      let styleSheet = document.styleSheets[0]
      if (!styleSheet) {
        throw new Error('To use the Animator component you need a linked stylesheet!')
      }

      animations.forEach((animation) => {
        if (typeof animation.name != 'string' || animation.name === '') {
          throw new TypeError(`Expected animation.name to be a non empty string, recevied ${animation.name}.`);
        }
        if (typeof animation.type != 'function') {
          throw new TypeError(`Expected animation.type to be a animation function, recevied ${animation.type}.`);
        }
        animation.type(styleSheet, animation)
      })
    }
  }

  render() {
    let { play } = this.props
    let { animations, scopedAnimations } = this.state
    let animationToPlay = ''

    // Search for scoped animation first
    if (scopedAnimations && animations) {
      animations.forEach((animation) => {
        if (animation.name === play) {
          animationToPlay = animation.id
        }
      })
    }
    // If no scoped animation that matches go to globals
    if (animationToPlay === '') {
      animationToPlay = play
    }

    return (
      <div className={ animationToPlay }>
        { this.props.children }
      </div>
    )
  }
}

Animator.propTypes = {
  animations: React.PropTypes.array,
  play: React.PropTypes.string
};
