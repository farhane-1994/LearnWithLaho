// Created by Amrita Samantara

// Created by amrita 

alert("Special thanks to Sick Line Bro for allowing me to copy his idea And  helping me for many times")




window.onload=()=>{


const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
document.getElementById("loading").style.display ="none"

canvas.width = 430
canvas.height = 250

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
let particle = 300;
const speed = 8;
addEventListener('click', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY -570
  for (let i = 0; i < particle ; i++) {
    let angel = (Math.PI * 2 )/ particle;
    let vx = Math.cos(angel * i) * Math.random() * speed
    let vy = Math.sin(angel * i) * Math.random() * speed
    objects.push(new Object(mouse.x,mouse.y, 5, hsl(${Math.random() *360}, 50%, 50%), vx,vy, gravity ))
  }
})

const gravity = 0.05;
const backForce = 0.99;


canvas.addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

let opacity = 1;

// Objects
class Object {
  constructor(x, y, radius, color , vx, vy, velocity) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.vx = vx
    this.vy = vy
    this.velocity = velocity 
    this.alpha = 1
  }

  draw() {
    c.save()
    c.globalAlpha = this.alpha
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
    c.restore()
    
    
    
  }

  update() {
    this.draw()
    this.x += this.vx;
    this.y += this.vy;
    this.velocity *= backForce ;
    this.vy += this.velocity  ;
    this.alpha -= 0.008;
    
    
    
  }
}

// Implementation
let objects 
function init() {
  objects = []

  
}



// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = 'rgba(229, 229, 229, 0.1)';
  c.fillRect(0, 0, canvas.width, canvas.height)

  
     for(let i=0; i<objects.length; i++){
      objects[i].update();
      
      if(objects[i].alpha > 0){}
      else{
        objects.splice(i, 1);}
    
    }
   
   
}

init()
animate()




}
