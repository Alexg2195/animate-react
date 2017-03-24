import React from 'react'


export default class Animator extends React.Component {

  // constructor() {
  //   super()
  //
  // }

  componentWillMount() {
    const { animations } = this.props

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

    return (
      <div className={ play }>
        { this.props.children }
      </div>
    )
  }
}

Animator.propTypes = {
  animations: React.PropTypes.array,
  play: React.PropTypes.string
};
