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

| Name          | Type                      | Description  |
|:-------------:|:-------------------------:| ------------ |
| play          | STRING                    | Animation to play right now. |
| animations    | [{ANIMATION_DEFINITION}]  | Array of animation objects. Name and type are required! |


### Animation Definition

| Name          | Type            | Default      | Description  |
|:-------------:|:---------------:|:------------:| ------------ |
| name          | STRING          | N/A REQUIRED | Animation name to call in the animator play prop |
| type          | ANIMATION_FN    | N/A REQUIRED | Imported animation type |
| duration      | STRING          | '4s'         | Duration of animation |

#### NOTE: animation names are written to a CSS stylesheet and are called upon. This means they are not scoped to a component and they need to be unique or else they will be shared and you will have unwanted behavior in your application.

***

## Animation Types

### `fadeIn`


## Development

### Commands

* `npm install` to install all packages needed
* `npm run dev` to start start build watcher
* `npm run test` to start build watcher on the testing bundle
