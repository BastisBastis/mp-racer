import EventEmitter from "eventemitter3"

export default class MockTextureManager extends EventEmitter {

  constructor (game)
    {
      super();
      
      this.game = game;

      
      this.name = 'TextureManager';

      
      this.list = {};

      
      

      game.events.once("boot", this.boot, this);
    }

    
    boot ()
    {
        console.log("TM boot")

        this.on("load", this.updatePending, this);
        this.on("error", this.updatePending, this);

        

        this.game.events.once("destroy", this.destroy, this);
    }

    
    updatePending ()
    {
        console.log("TM updatePending")
        
            
      this.emit("ready");
        
    }
    
    /*
    once(key,callback,ctx) {
      this.game.events.once(key,callback, ctx);
    }
    */
    
    checkKey (key)
    {
        
        return true;
    }

    
    remove (key)
    {
        
        return this;
    }

    
    removeKey (key)
    {
        

        return this;
    }

    
    addBase64 (key, data)
    {

        return this;
    }

    
    getBase64 (key, frame, type, encoderOptions)
    {
        
        return '';
    }

    
    addImage (key, source, dataSource)
    {
        
        return null;
    }

    
    addGLTexture (key, glTexture, width, height)
    {
        
        return null;
    }

    
    addRenderTexture (key, renderTexture)
    {
        var texture = null;

        
        return texture;
    }

    
    generate (key, config)
    {
        
            return null;
        
    }

    
    createCanvas (key, width, height)
    {
        

        return null;
    }

    
    addCanvas (key, source, skipCache)
    {
        
        var texture = null;

        
        return texture;
    }

    
    addAtlas (key, source, data, dataSource)
    {
        return null;
    }

   
    addAtlasJSONArray (key, source, data, dataSource)
    {
        var texture = null;

        
        return texture;
    }

    
    addAtlasJSONHash (key, source, data, dataSource)
    {
        var texture = null;

        
        return texture;
    }

    
    addAtlasXML (key, source, data, dataSource)
    {
        var texture = null;

        
        return texture;
    }

    
    addUnityAtlas (key, source, data, dataSource)
    {
        var texture = null;

        
        return texture;
    }

    
    addSpriteSheet (key, source, config)
    {
        var texture = null;

        
        return texture;
    }

    
    addSpriteSheetFromAtlas (key, config)
    {
        
            return null;
        

        
    }

    
    create (key, source, width, height)
    {
        var texture = null;

        
        return texture;
    }

    
    exists (key)
    {
        return (this.list.hasOwnProperty(key));
    }

    
    get (key)
    {
        console.log("tm get")
        return ""
    }

    
    cloneFrame (key, frame)
    {
        return ""
    }

    
    getFrame (key, frame)
    {
        return ""
    }

    
    getTextureKeys ()
    {
        var output = [];

        

        return output;
    }

    
    getPixel (x, y, key, frame)
    {
        
                return new Color(0, 0, 0, 0);
            
    }

    
    getPixelAlpha (x, y, key, frame)
    {
        
        return 1;
    }

    
    setTexture (gameObject, key, frame)
    {
        
        return gameObject;
    }

    
    renameTexture (currentKey, newKey)
    {
        
        return true;
    }

    
    each (callback, scope)
    {
        
    }

    
    destroy ()
    {
        console.log("destroy")
    }

}