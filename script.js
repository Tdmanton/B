
window.onload = function() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class Balloon {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + Math.random() * 100;
      this.radius = 20 + Math.random() * 20;
      this.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
      this.speed = 1 + Math.random() * 2;
    }
    update() {
      this.y -= this.speed;
      if (this.y < -50) {
        this.y = canvas.height + 50;
        this.x = Math.random() * canvas.width;
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
  }

  let balloons = [];
  for (let i = 0; i < 30; i++) {
    balloons.push(new Balloon());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let b of balloons) {
      b.update();
      b.draw();
    }
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}
