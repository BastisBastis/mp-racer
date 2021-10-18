import * as THREE from "three"
import WheelPng from "./RacerWheel.png"

const wsy=0.1; //wind shield
  const rwy=0.3; //rear window
  const fy=-0.3; //front y
  const bz=-3; //back end
  const ty=-0; //trunk
  const tz=-2;
  const fz=4; //front z
  const hz=2.5; //Hood z
  
  const wheelRadius=0.5;
  const wheelHeight=0.3;
  const wheelY=-1+wheelRadius-0.2;
  const wheelX=1.0;
  const frontWheelZ=hz;
  const backWheelZ=-1.5;
  
  
  const tcobffZ=3.1; //tc bottom front front
  const tcotffZ=2.9; //tc top front front
   //tc bottom back front
  
  const tcoffY=0//tire cutout front front y
  const tcoY=(origZ,coZ,topZ,topY,) =>{
    return (coZ-origZ)/(topZ-origZ)*(1+topY)-1;
  }
  
  const tcobbfZ=frontWheelZ-(tcobffZ-frontWheelZ);
  const tcotbfZ=frontWheelZ-(tcotffZ-frontWheelZ);
  
  
  const winX=1.001 //window x
  const winMargin=0.1;

const getGeometry =(rgb)=> {
    
  const vertices = [
  { pos: [-1,  wsy,  hz], norm: [ 0,  0,  1], uv: [0, 0], },
  { pos: [ 1, wsy,  hz], norm: [ 0,  0,  1], uv: [1, 0], },
  { pos: [-1,  1,  1], norm: [ 0,  0,  1], uv: [0, 1], },
 
  { pos: [-1,  1,  1], norm: [ 0,  0,  1], uv: [0, 1], },
  { pos: [ 1,  wsy,  hz], norm: [ 0,  0,  1], uv: [1, 0], },
  { pos: [ 1,  1,  1], norm: [ 0,  0,  1], uv: [1, 1], },
  
  //hood
  
  { pos: [-1, fy,  fz], norm: [ 0,  0,  1], uv: [0, 0], },
  { pos: [ 1, fy,  fz], norm: [ 0,  0,  1], uv: [1, 0], },
  { pos: [-1,  wsy,  hz], norm: [ 0,  0,  1], uv: [0, 1], },
 
  { pos: [-1,  wsy,  hz], norm: [ 0,  0,  1], uv: [0, 1], },
  { pos: [ 1, fy,  fz], norm: [ 0,  0,  1], uv: [1, 0], },
  { pos: [ 1,  wsy,  hz], norm: [ 0,  0,  1], uv: [1, 1], },
  
  //front
  { pos: [-1, -1,  fz], norm: [ 0,  0,  1], uv: [0, 0], },
  { pos: [ 1, -1,  fz], norm: [ 0,  0,  1], uv: [1, 0], },
  { pos: [-1, fy,  fz], norm: [ 0,  0,  1], uv: [0, 1], },
 
  { pos: [-1, fy,  fz], norm: [ 0,  0,  1], uv: [0, 1], },
  { pos: [ 1, -1,  fz], norm: [ 0,  0,  1], uv: [1, 0], },
  { pos: [ 1,  fy,  fz], norm: [ 0,  0,  1], uv: [1, 1], },
  
  // right
  { pos: [ 1, -1,  1], norm: [ 1,  0,  0], uv: [0, 0], },
  { pos: [ 1, -1, bz], norm: [ 1,  0,  0], uv: [1, 0], },
  { pos: [ 1,  1,  1], norm: [ 1,  0,  0], uv: [0, 1], },
 
  { pos: [ 1,  1,  1], norm: [ 1,  0,  0], uv: [0, 1], },
  { pos: [ 1, -1, bz], norm: [ 1,  0,  0], uv: [1, 0], },
  { pos: [ 1,  1, -1], norm: [ 1,  0,  0], uv: [1, 1], },
  
  { pos: [ 1,  1,  -1], norm: [ 1,  0,  0], uv: [0, 1], },
  { pos: [ 1, -1, bz], norm: [ 1,  0,  0], uv: [1, 0], },
  { pos: [ 1,  rwy, tz], norm: [ 1,  0,  0], uv: [1, 1], },
  
  { pos: [ 1,  rwy,  tz], norm: [ 1,  0,  0], uv: [0, 1], },
  { pos: [ 1, -1, bz], norm: [ 1,  0,  0], uv: [1, 0], },
  { pos: [ 1,  ty, bz], norm: [ 1,  0,  0], uv: [1, 1], },
  
  //right window
  { pos: [ winX, winMargin,  hz-winMargin], norm: [ 1,  0,  0], uv: [0, 0], },
  { pos: [ winX, winMargin, 0], norm: [ 1,  0,  0], uv: [1, 0], },
  { pos: [ winX,  1-winMargin,  1], norm: [ 1,  0,  0], uv: [0, 1], },
 
  { pos: [ winX,  1-winMargin,  1], norm: [ 1,  0,  0], uv: [0, 1], },
  { pos: [ winX, winMargin, 0], norm: [ 1,  0,  0], uv: [1, 0], },
  { pos: [ winX,  1-winMargin, 0], norm: [ 1,  0,  0], uv: [1, 1], },
  
  //right front door
  { pos: [ 1, -1,  fz], norm: [ 1,  0,  0], uv: [0, 0], },
  { pos: [ 1, -1,  tcobffZ], norm: [ 1,  0,  0], uv: [1, 0], },
  { pos: [ 1,  tcoY(fz,tcotffZ,hz,wsy),  tcotffZ], norm: [ 1,  0,  0], uv: [0, 1], },
  
  { pos: [ 1, -1,  tcobbfZ], norm: [ 1,  0,  0], uv: [0, 0], },
  { pos: [ 1, -1,  1], norm: [ 1,  0,  0], uv: [1, 0], },
  { pos: [ 1,  tcoY(1,tcotbfZ,hz,wsy),  tcotbfZ], norm: [ 1,  0,  0], uv: [0, 1], },
  
  { pos: [ 1,  wsy,  hz], norm: [ 1,  0,  0], uv: [0, 1], },
  { pos: [ 1,  tcoY(fz,tcotffZ,hz,wsy),  tcotffZ], norm: [ 1,  0,  0], uv: [0, 1], },
  { pos: [ 1,  tcoY(1,tcotbfZ,hz,wsy),  tcotbfZ], norm: [ 1,  0,  0], uv: [0, 1], },
  
 
  { pos: [ 1,  wsy,  hz], norm: [ 1,  0,  0], uv: [0, 1], },
  { pos: [ 1, -1,  1], norm: [ 1,  0,  0], uv: [1, 0], },
  { pos: [ 1,  1,  1], norm: [ 1,  0,  0], uv: [1, 1], },
  
  { pos: [ 1,  -1,  fz], norm: [ 1,  0,  0], uv: [0, 1], },
  { pos: [ 1, wsy,  hz], norm: [ 1,  0,  0], uv: [1, 0], },
  { pos: [ 1,  fy,  fz], norm: [ 1,  0,  0], uv: [1, 1], },
  
  
  // back
  { pos: [ 1, -1, bz], norm: [ 0,  0, -1], uv: [0, 0], },
  { pos: [-1, -1, bz], norm: [ 0,  0, -1], uv: [1, 0], },
  { pos: [ 1,  ty, bz], norm: [ 0,  0, -1], uv: [0, 1], },
 
  { pos: [ 1,  ty, bz], norm: [ 0,  0, -1], uv: [0, 1], },
  { pos: [-1, -1, bz], norm: [ 0,  0, -1], uv: [1, 0], },
  { pos: [-1,  ty, bz], norm: [ 0,  0, -1], uv: [1, 1], },
  
  //Trunk
  { pos: [ 1, ty, bz], norm: [ 0,  0, -1], uv: [0, 0], },
  { pos: [-1, ty, bz], norm: [ 0,  0, -1], uv: [1, 0], },
  { pos: [ 1,  rwy, tz], norm: [ 0,  0, -1], uv: [0, 1], },
 
  { pos: [ 1,  rwy, tz], norm: [ 0,  0, -1], uv: [0, 1], },
  { pos: [-1, ty, bz], norm: [ 0,  0, -1], uv: [1, 0], },
  { pos: [-1,  rwy, tz], norm: [ 0,  0, -1], uv: [1, 1], },
  
  // rear window
  { pos: [ 1,  0.3, -2], norm: [ 0,  0, -1], uv: [0, 0], },
  { pos: [-1,  0.3, -2], norm: [ 0,  0, -1], uv: [1, 0], },
  { pos: [ 1,  1, -1], norm: [ 0,  0, -1], uv: [0, 1], },
 
  { pos: [ 1,  1, -1], norm: [ 0,  0, -1], uv: [0, 1], },
  { pos: [-1,  0.3, -2], norm: [ 0,  0, -1], uv: [1, 0], },
  { pos: [-1,  1, -1], norm: [ 0,  0, -1], uv: [1, 1], },
  
  // left
  { pos: [-1, -1, bz], norm: [-1,  0,  0], uv: [0, 0], },
  { pos: [-1, -1,  1], norm: [-1,  0,  0], uv: [1, 0], },
  { pos: [-1,  1, -1], norm: [-1,  0,  0], uv: [0, 1], },
 
  { pos: [-1,  1, -1], norm: [-1,  0,  0], uv: [0, 1], },
  { pos: [-1, -1,  1], norm: [-1,  0,  0], uv: [1, 0], },
  { pos: [-1,  1,  1], norm: [-1,  0,  0], uv: [1, 1], },
  
  { pos: [-1, ty, bz], norm: [-1,  0,  0], uv: [0, 1], },
  { pos: [-1,  -1, bz], norm: [-1,  0,  0], uv: [1, 0], },
  { pos: [-1,  rwy, tz], norm: [-1,  0,  0], uv: [1, 1], },
  
  { pos: [-1, -1, bz], norm: [-1,  0,  0], uv: [0, 1], },
  { pos: [-1,  1, -1], norm: [-1,  0,  0], uv: [1, 0], },
  { pos: [-1,  rwy, tz], norm: [-1,  0,  0], uv: [1, 1], },
  
  //left window
  { pos: [ -winX, winMargin,  hz-winMargin], norm: [ -1,  0,  0], uv: [0, 0], },
  { pos: [ -winX, 1-winMargin,  1], norm: [ -1,  0,  0], uv: [1, 0], },
  { pos: [ -winX,  winMargin,  0], norm: [ -1,  0,  0], uv: [0, 1], },
 
  { pos: [ -winX,  1-winMargin,  1], norm: [ -1,  0,  0], uv: [0, 1], },
  { pos: [ -winX, 1-winMargin, 0], norm: [ -1,  0,  0], uv: [1, 0], },
  { pos: [ -winX,  winMargin, 0], norm: [ -1,  0,  0], uv: [1, 1], },
  
  // left door
  { pos: [-1,  wsy,  hz], norm: [-1,  0,  0], uv: [0, 0], },
  { pos: [-1,  tcoY(1,tcotbfZ,hz,wsy),  tcotbfZ], norm: [-1,  0,  0], uv: [1, 0], },
  { pos: [-1,  tcoY(fz,tcotffZ,hz,wsy),  tcotffZ], norm: [-1,  0,  0], uv: [0, 1], },
  
  { pos: [-1, -1,  tcobffZ], norm: [-1,  0,  0], uv: [0, 1], },
  { pos: [-1, -1,  fz], norm: [-1,  0,  0], uv: [1, 0], },
  { pos: [-1,  tcoY(fz,tcotffZ,hz,wsy),  tcotffZ], norm: [-1,  0,  0], uv: [1, 1], },
  
  { pos: [-1,  -1,  1], norm: [-1,  0,  0], uv: [0, 1], },
  { pos: [-1, -1,  tcobbfZ], norm: [-1,  0,  0], uv: [1, 0], },
  { pos: [-1,  tcoY(1,tcotbfZ,hz,wsy),  tcotbfZ], norm: [-1,  0,  0], uv: [1, 1], },
 
  { pos: [-1,  1,  1], norm: [-1,  0,  0], uv: [0, 1], },
  { pos: [-1, -1,  1], norm: [-1,  0,  0], uv: [1, 0], },
  { pos: [-1,  wsy,  hz], norm: [-1,  0,  0], uv: [1, 1], },
  
  { pos: [-1,  wsy,  hz], norm: [-1,  0,  0], uv: [0, 1], },
  { pos: [-1, -1,  fz], norm: [-1,  0,  0], uv: [1, 0], },
  { pos: [-1,  fy,  fz], norm: [-1,  0,  0], uv: [1, 1], },
  
  // top
  { pos: [ 1,  1, -1], norm: [ 0,  1,  0], uv: [0, 0], },
  { pos: [-1,  1, -1], norm: [ 0,  1,  0], uv: [1, 0], },
  { pos: [ 1,  1,  1], norm: [ 0,  1,  0], uv: [0, 1], },
 
  { pos: [ 1,  1,  1], norm: [ 0,  1,  0], uv: [0, 1], },
  { pos: [-1,  1, -1], norm: [ 0,  1,  0], uv: [1, 0], },
  { pos: [-1,  1,  1], norm: [ 0,  1,  0], uv: [1, 1], },
  // bottom
  { pos: [ 1, -1,  2], norm: [ 0, -1,  0], uv: [0, 0], },
  { pos: [-1, -1,  2], norm: [ 0, -1,  0], uv: [1, 0], },
  { pos: [ 1, -1, -1], norm: [ 0, -1,  0], uv: [0, 1], },
 
  { pos: [ 1, -1, -1], norm: [ 0, -1,  0], uv: [0, 1], },
  { pos: [-1, -1,  2], norm: [ 0, -1,  0], uv: [1, 0], },
  { pos: [-1, -1, -1], norm: [ 0, -1,  0], uv: [1, 1], },
];
  
  
  
  const positions = [];
  const normals = [];
  const uvs = [];
  for (const vertex of vertices) {
    
    positions.push(...vertex.pos);
    normals.push(...vertex.norm);
    uvs.push(...vertex.uv);
  }
  const geometry = new THREE.BufferGeometry();
  const positionNumComponents = 3;
  const normalNumComponents = 3;
  const uvNumComponents = 2;
  geometry.setAttribute(
    'position',
    new THREE.BufferAttribute(new Float32Array(positions), positionNumComponents));
geometry.setAttribute(
    'normal',
    new THREE.BufferAttribute(new Float32Array(normals), normalNumComponents));
geometry.setAttribute(
    'uv',
    new THREE.BufferAttribute(new Float32Array(uvs), uvNumComponents));
        
  const colors = new Uint8Array([
    0, 0, 0, //windshield
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    
    rgb[0], rgb[1], rgb[2],  //hood
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    
    rgb[0], rgb[1], rgb[2], //front
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    
    rgb[0], rgb[1], rgb[2],  //right
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    
    0, 0, 0, //right window
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    
    rgb[0], rgb[1], rgb[2],  //right door
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    
    rgb[0], rgb[1], rgb[2], //back
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    
    rgb[0], rgb[1], rgb[2], //trunk
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    
    0, 0, 0, //rear window
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    
    rgb[0], rgb[1], rgb[2],  //right
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    
    0, 0, 0, //right window
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    
    rgb[0], rgb[1], rgb[2],  //right door
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
    rgb[0], rgb[1], rgb[2],  
    rgb[0], rgb[1], rgb[2],
  ])
  
  geometry.setAttribute( 'color', new THREE.BufferAttribute( colors, 3, true) );
    
  
  
  return geometry;
}

const getWheels=(xScale,zScale)=> {
  const wheelGeometry = new THREE.CylinderGeometry( wheelRadius*zScale, wheelRadius*zScale, wheelHeight*xScale, 16 );
  
  const wheelCapTex = THREE.ImageUtils.loadTexture(WheelPng);
  //console.log(wheelCapTex)
//const wheelMaterial = new THREE.MeshPhongMaterial( {color: 0xffff00} );
const wheelMaterials = [
  new THREE.MeshPhongMaterial( {color: 0x000} ),
  new THREE.MeshBasicMaterial( {map: wheelCapTex} ),
  new THREE.MeshPhongMaterial( {color: 0x000} )
  ];
  const wheels=[];
  const tires=[];
  const wheelConfig= [
    {matOrder:[0,2,1],z:frontWheelZ,x:wheelX},
    {matOrder:[0,1,2],z:frontWheelZ,x:-wheelX},
    {matOrder:[0,2,1],z:backWheelZ,x:wheelX},
    {matOrder:[0,1,2],z:backWheelZ,x:-wheelX},
  ];
  for (const wc of wheelConfig) {
    const tire = new THREE.Mesh( wheelGeometry, [wheelMaterials[wc.matOrder[0]],wheelMaterials[wc.matOrder[1]], wheelMaterials[wc.matOrder[2]]] );
    tire.rotation.z=Math.PI/2
    const wheel=new THREE.Group();
    wheel.add(tire);
    wheel.position.x=wc.x*xScale;
    wheel.position.y=wheelY*zScale;
    wheel.position.z=wc.z*zScale;
    tires.push(tire);
    wheels.push(wheel)
  }
  return {wheels:wheels,tires:tires};
}

export default class Car3d extends THREE.Mesh {
  
  constructor(args) {
    
    let hexColor=args.color.toString(16);
    while (hexColor.length<6) {
      hexColor = "00"+hexColor;
    }
    //hexColor="ff0000"
    const aRgbHex = hexColor.match(/.{1,2}/g);
    const rgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    
    
    const geometry = getGeometry(rgb);
    
    
    
    
    
    const material = new THREE.MeshPhongMaterial( {vertexColors: THREE.VertexColors });
    

    
    super(geometry, material);
    
    
    
    const boundingBox = new THREE.Box3().setFromObject(this)
    //const size = boundingBox.getSize() 
    //console.log(boundingBox)
    const xScale=16/(boundingBox.max.x-boundingBox.min.x);
    const zScale=32/(boundingBox.max.z-boundingBox.min.z);
    const origin= (boundingBox.max.z-boundingBox.min.z)*0.25+boundingBox.min.z;
    
    const {wheels,tires} = getWheels(xScale,zScale);
    this.wheels=wheels;
    this.tires=tires;
    
    for (const wheel of wheels) {
      wheel.position.z+=1*zScale
      this.add(wheel);
    }
      
      
    geometry.scale(xScale,zScale,zScale);
    geometry.translate( 0, 0, 1*zScale );
    
    
    
    this.position.y=zScale+wheelRadius*zScale/2;
  }
  
  rotateTires(amount) {
    for (const tire of this.tires) {
      tire.rotation.x+=amount*0.01;
    }
  }
  
  turnWheels(amount) {
    amount = -amount*3
    //console.log(amount)
    for (const wheel of this.wheels.slice(0,2)) {
      //console.log(2)
      wheel.rotation.y=amount//*Math.PI/12;
    }
  }
  
}

