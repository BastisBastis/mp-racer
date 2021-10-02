import jsdom from 'jsdom'
import FakeXMLHttpRequest from './FakeXMLHttpRequest'
import Image from './MockImage'
import canvasMockify from "canvas-mock"

const { JSDOM } = jsdom
const dom = new JSDOM(`<!DOCTYPE html><body></body>`)

const document = dom.window.document
const window = dom.window
window.focus = () => {}

var Canvas = window.document.createElement('canvas');
 canvasMockify(Canvas);
window.HTMLCanvasElement.prototype.getContext = ()=>{
  return Canvas.getContext()
}

global.document = document
global.window = window
global.window.Element = undefined
global.navigator = { userAgent: 'node' }
global.Image = Image
global.XMLHttpRequest = FakeXMLHttpRequest
global.HTMLCanvasElement = window.HTMLCanvasElement
global.HTMLVideoElement = window.HTMLVideoElement

// @ts-ignore
global.URL = () => {}
global.URL.createObjectURL = (base64) => `data:image/png;base64,${base64}`
global.URL.revokeObjectURL = () => {}

// phaser on node variables
global.phaserOnNodeFPS = 60

const animationFrame = (cb) => {
  if (typeof cb !== 'function') return 0 // this line saves a lot of cpu
  window.setTimeout(() => cb(0), 1000 / global.phaserOnNodeFPS)
  return 0
}
export { animationFrame }

window.requestAnimationFrame = cb => {
  return animationFrame(cb)
}

const requestAnimationFrame = window.requestAnimationFrame
export { requestAnimationFrame }