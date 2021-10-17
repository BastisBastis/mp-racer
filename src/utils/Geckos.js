import jsdom from 'jsdom'
import FakeXMLHttpRequest from './FakeXMLHttpRequest'
import Image from './MockImage'
import canvasMockify from "canvas-mock"
import Datauri from 'datauri'
//import {Image} from "skia-canvas"

try {
  

const { JSDOM } = jsdom
const dom = new JSDOM(`<!DOCTYPE html><body></body>`)

const document = dom.window.document
const window = dom.window
window.focus = () => {}

const datauri = new Datauri();

window.URL.createObjectURL = function (blob) {
  console.log("hm")
    if(blob){
      return datauri.format(blob.type, blob[Object.getOwnPropertySymbols(blob)[0]]._buffer).content;
    }
  };;
window.URL.revokeObjectURL = function (objectURL) {
    // Do nothing at the moment
  };

var Canvas = window.document.createElement('canvas');
 canvasMockify(Canvas);
window.HTMLCanvasElement.prototype.getContext = ()=>{
  return Canvas.getContext()
}

global.document = document
global.window = window
global.window.Element = undefined
global.navigator = { userAgent: 'node' }
global.Image = Image//document.createElement('img');
global.loadImage=(arg)=>{
  console.log("load image");
  console.log(JSON.stringify(arg))
}
global.XMLHttpRequest = FakeXMLHttpRequest
global.HTMLCanvasElement = window.HTMLCanvasElement
global.HTMLVideoElement = window.HTMLVideoElement

// @ts-ignore
global.URL = () => {}
//global.URL.createObjectURL = (base64) => `data:image/png;base64,${base64}`
global.URL.revokeObjectURL = () => {}

// phaser on node variables
global.phaserOnNodeFPS = 75

} catch (err) {
  console.log(err)
}

const animationFrame = (cb) => {
  //console.log("gah")
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

