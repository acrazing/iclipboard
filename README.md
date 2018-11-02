# iclipboard

A library to manipulate clipboard without button binding.

## Install

```bash
# var npm
npm install -S iclipboard

# var yarn
yarn add iclipboard
```

## Quick Start

```typescript
import { copy } from 'iclipboard'

const button = document.getElementById('my-copy-button')

button.addEventListener('click', () => {
  if(copy('Hello world')) {
    alert('Copy to clipboard success!')
  } else {
    alert('Copy to clipboard fail')
  }
})
```

## API

- [copy](#copy)

### copy

1. `copy(text: string): boolean`
    copy `text` to system clipboard.
    Returns `true` if execute succeeded, else returns `false`.
2. `copy.isSupported(): 'copy' | 'cut' | false`
    check copy is supported or not, if not support, returns false, else
    returns supported mode, `copy` or `cut`.

## LICENSE

```text
The MIT License (MIT)

Copyright (c) 2018 acrazing

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```