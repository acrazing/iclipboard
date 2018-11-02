/*!
 * Copyright 2018 yangjunbao <yangjunbao@shimo.im>. All rights reserved.
 * @since 2018-11-02 19:47:25
 */

let _action: 'copy' | 'cut' | false;

/**
 * Check copy is supported or not
 * @returns {'copy' | 'cut' | false} - false if not supported, else the mode
 */
function getAction() {
  if (_action === void 0) {
    _action = document.queryCommandSupported('copy')
      ? 'copy'
      : document.queryCommandSupported('cut')
        ? 'cut' : false;
  }
  return _action;
}

function createSelection(text: string) {
  const input = document.createElement('input');
  input.style.cssText = `position: absolute; top: -9999px; left: -9999px;`;
  document.body.appendChild(input);
  input.value = text;
  input.readOnly = true;
  input.select();
  input.setSelectionRange(0, text.length);
  return input;
}

/**
 * Copy text to system clipboard
 * @param {string} text - the text to copy
 * @returns {boolean} - true if copy succeeded, else false
 */
export function copy(text: string): boolean {
  const action = getAction();
  if (!action) {
    return false;
  }
  const input = createSelection(text);
  try {
    return document.execCommand(action);
  } catch {
    return false;
  } finally {
    document.body.removeChild(input);
  }
}

copy.isSupported = getAction;