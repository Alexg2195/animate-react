# animate-react

## `<Animator></Animator>`
The Animator component acts as a wrapper for any other UI code you want to add animations to.

##### Example of Animator
```
import { Animator, fadeIn } from 'animate-react'

<Animator
  play={['initialFadeIn']},
  animations={[
    {
      name: 'initialFadeIn',
      type: fadeIn
    }
  ]}
>
  <h1>MY CODE THAT HAS A NEW AWESOME FADE IN</h1>
</Animator>
```

### Animator Props

| Name          | Type                               | Description  |
|:-------------:|:----------------------------------:| ------------ |
| play          | [string, string]                   | Array list of animations to play. Can be used to combine animations together. |
| animations    | [{name: STRING, type: ANIMATION}]  | Array list of animation objects. Name and type are required! |

#### NOTE: animation names are written to a CSS stylesheet and are called upon. This means they are not scoped to a component and they need to be unique or else they will be shared and you will have unwanted behavior in your application. 

***

## Animation Types

### `fadeIn`
