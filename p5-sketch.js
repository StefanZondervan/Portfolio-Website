let particles = [];

const num = 2000;

const noiseScale = 0.01;
const interactionRadius = 100; // Adjust this radius to control the interaction area

let t = 0;
let tinc = 0.01;

function setup() {
  let canvas = createCanvas(2000, 1000);
  canvas.parent("sketch-container"); // Set parent to the div with id "sketch-container"

  for (let i = 0; i < num; i++) {
    particles.push(createVector(random(width), random(height)));
  }
  stroke(255, 0, 255, 100);
  background(0);
}

function draw() {
  // Get the current mouse position
  let mouseXPos = mouseX;
  let mouseYPos = mouseY;
  background(0, 20);
  strokeWeight(3);
  for (let i = 0; i < num; i++) {
    let p = particles[i];
    point(p.x, p.y);

    // Calculate the distance between the particle and the mouse
    let distance = dist(mouseXPos, mouseYPos, p.x, p.y);

    if (distance < interactionRadius) {
      // Calculate the angle based on the mouse position
      let angle = atan2(p.y - mouseYPos, p.x - mouseXPos);

      // Update particle position based on angle and noise
      let n = noise(p.x * noiseScale, p.y * noiseScale);
      let a = angle + map(n, 0, 1, -PI, PI); // Combine angle and noise angle
      let moveSpeed = map(distance, 0, interactionRadius, 1, 0.2);
      p.x += cos(a) * moveSpeed;
      p.y += sin(a) * moveSpeed;
    } else {
      // Update particle position based on noise only
      let n = noise(p.x * noiseScale, p.y * noiseScale);
      let a = TAU * n;
      p.x += cos(a);
      p.y += sin(a);
    }

    // Reset particle position if it's off-screen
    if (!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function mouseReleased() {
  noiseSeed(millis());
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}
