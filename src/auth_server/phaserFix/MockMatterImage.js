import Phaser from "phaser"

export default class MockMatterImage extends Phaser.Physics.Matter.Image {
  
  constructor (world, x, y, texture, frame, options) {
    super(world, x, y, texture, frame, options);
    
    
  }
  
    setRectangle(w,h,options){
      this.width=10;
      this.height=10;
      super.setRectangle(this.width,this.height,options)
    }
  
    resetCropObject() {
      return true
    }

    setTexture(texture, frame) {
      return true;
    }
    
    setSizeToFrame() {
      return true;
    }
    
    setOrigin() {
      return true;
    }
  
}