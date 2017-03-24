import React from 'react'
import ReactDOM from 'react-dom'

import { Animator } from '../build'
import { fadeIn, fadeOut } from '../build'

ReactDOM.render(
  <div>
    <Animator animations={[
      {
        name: 'initialFadeIn',
        type: fadeIn,
        duration: '7s'
      }
    ]} />
    <Animator play={'initialFadeIn'} animations={[
      {
        name: 'initialFadeIn',
        type: fadeIn,
        duration: '1s'
      }
    ]}>
      <h1 style={{top: '50%', left: '30%', position: 'fixed', transform: 'translate(-50%,-50%)', color: 'white'}}>FADE IN!</h1>
    </Animator>
    <Animator play='initialFadeIn'>
      <h1 style={{top: '50%', left: '70%', position: 'fixed', transform: 'translate(-50%,-50%)', color: 'white'}}>Global Fade in</h1>
    </Animator>
  </div>
,document.getElementById('app'))
