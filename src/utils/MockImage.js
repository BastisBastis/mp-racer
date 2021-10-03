export default class Image {
  constructor (args) {
    console.log("img constructor")
    console.log(JSON.stringify(args))
  }
  
  getSource() {
    console.log("get source")
  }
  
  setSource(arg) {
    console.log("set source")
    console.log(JSON.stringify(arg))
  }
}