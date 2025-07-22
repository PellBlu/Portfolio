// @flow
import popperGenerator from './index'
import applyStyles from './modifiers/applyStyles'
import arrow from './modifiers/arrow'
import computeStyles from './modifiers/computeStyles'
import eventListeners from './modifiers/eventListeners'
import flip from './modifiers/flip'
import hide from './modifiers/hide'
import offset from './modifiers/offset'
import popperOffsets from './modifiers/popperOffsets'
import preventOverflow from './modifiers/preventOverflow'

const defaultModifiers = [
  eventListeners,
  popperOffsets,
  computeStyles,
  applyStyles,
  offset,
  flip,
  preventOverflow,
  arrow,
  hide,
]

const createPopper = popperGenerator({ defaultModifiers })

// eslint-disable-next-line import/no-unused-modules
export { createPopper, popperGenerator, defaultModifiers }