import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.dev.config.js'
import jsdom from "jsdom"
import canvasMockify from "canvas-mock"
import PhaserGame from '../ServerGame'
import socket from 'socket.io'

  
/*var os = require('os');
os.platform(); // 'darwin'
os.release(); //'10.8.0'
*/


const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html'),
            compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))
app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
  if (err) {
    return next(err)
  }
  res.set('content-type', 'text/html')
  res.send(result)
  res.end()
  })
})

const PORT = process.env.PORT || 8080
const server =app.listen(PORT, () => {
    console.log(`App listening to ${PORT}.....`)
    console.log('Press Ctrl+C to quit.')
})

const io = socket(server);


  

/*
const io = geckos()

io.listen(3000) // default port is 9208

io.onConnection(channel => {
  channel.onDisconnect(() => {
    console.log(`${channel.id} got disconnected`)
  })

  channel.on('chat message', data => {
    console.log(`got ${data} from "chat message"`)
    // emit the "chat message" data to all channels in the same room
    io.room(channel.roomId).emit('chat message', data)
  })
})
*/

/*
const {JSDOM} = jsdom;
const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.sendTo(console);
virtualConsole.on("error", (err) => { console.log(err) });



const pth = (path.join(__dirname, 'index.html'));
*/

//function setupAuthoritativePhaser() {
  //console.log(1)

  
  try {
    /*
    //console.log(canvasMockify)
    
    const dom = new JSDOM(`<body>
  <script>console.log('hopp')</script>
</body>`, { 
    // To run the scripts in the html file
    runScripts: "dangerously",
    // Also load supported external resources
    resources: "usable",
    // So requestAnimatinFrame events fire
    pretendToBeVisual: true,
    virtualConsole: virtualConsole,
 });
 */
 //console.log(dom.window.document.body.innerHTML)
 //file://${__dirname}/ServerGame.js
 
  /*
  JSDOM.fromFile(pth, {
    // To run the scripts in the html file
    runScripts: "dangerously",
    // Also load supported external resources
    resources: "usable",
    // So requestAnimatinFrame events fire
    pretendToBeVisual: true,
    virtualConsole: virtualConsole,
    
  }).then(dom=>{
    dom.window.document.body.innerHTML+=`<script src="file://${__dirname}/ServerGame.js"></script>`;
    dom.window.eval(`tst()`);
    console.log("hipp")
    console.log(dom.window.document.body.innerHTML)
  }).catch(err=>{
    console.log(err);
  });
  
  */
  const serverGame = new PhaserGame(io);
  
  
  } catch (err) {
    console.log(err)
  }
  
  //console.log(2)
  
//}
//setTimeout(setupAuthoritativePhaser,100);