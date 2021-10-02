import path from 'path'
import fs from 'fs'
const status=200;

class FakeXMLHttpRequest {
  
  //static status = 200
  

  open(_type, url) {
    this.url = path.resolve(__dirname, url)
  }

  send() {
    // use base64 for images and utf8 for json files
    const encoding = /\.json$/gm.test(this.url) ? 'utf8' : 'base64'
    console.log("hopp")
    window.readFile(this.url, {encoding}, (err, data) => {
      if (err) throw err
      this.response = data
      this.responseText = data
      const event = { target: { status: this.status } }
      this.onload(this, event)
    })
  }
  onload(xhr, event) {}
  onerror(err) {}
  onprogress() {}
}

export default FakeXMLHttpRequest
