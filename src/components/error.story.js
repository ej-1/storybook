
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Error from '../components/error'
  
storiesOf('Error', module)
  .add('with text', () => <Error message="Error: Stories are for children."></Error>)

