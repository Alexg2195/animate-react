import React from 'react'
import ReactDOM from 'react-dom'

import { Animator } from '../build'
import { fadeIn } from '../build'

ReactDOM.render(
  <div>
    <Animator play={['initialFadeIn']} animations={[
      {
        name: 'initialFadeIn',
        type: fadeIn
      }
    ]}>
      <h1>TEST</h1>
    </Animator>
  </div>
,document.getElementById('app'))
