/*!
 * Copyright 2018 yangjunbao <yangjunbao@shimo.im>. All rights reserved.
 * @since 2018-11-02 20:32:35
 */

import { copy } from './src'

const button = document.createElement('button')

button.innerHTML = 'Click Me!'

button.addEventListener('click', () => {
  if (copy('hello world')) {
    console.log('success')
  } else {
    console.error('fail')
  }
})

document.body.appendChild(button)