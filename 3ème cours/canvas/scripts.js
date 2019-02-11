'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const getCoordinatesInCanvas = (canvasEl, event) => {
  const rect = canvasEl.getBoundingClientRect(); // récupérer la taille de <canvas> et sa position relative par rapport à la zone d'affichage
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(`x: ${x}, y: ${y}`);
}
canvas.addEventListener('click', (event) => {
  getCoordinatesInCanvas(canvas, event);
});

ctx.strokeStyle = 'white';
ctx.fillStyle = 'white';

// HEAD
ctx.beginPath();
ctx.arc(200, 180, 60, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// BODY
ctx.beginPath();
ctx.arc(200, 360, 120, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// HAT
ctx.strokeStyle = 'black';
ctx.fillStyle = 'black';
ctx.fillRect(126, 131, 145, 30);
ctx.fillRect(155, 52, 90, 100);

// EYES
ctx.beginPath();
ctx.arc(176, 176, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(216, 176, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// ARM
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(130, 309);
ctx.lineTo(41, 225);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(266, 310);
ctx.lineTo(359, 229);
ctx.stroke();

// nose

ctx.strokeStyle = 'orange';
ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.moveTo(198, 188);
ctx.lineTo(125, 207);
ctx.lineTo(197, 214);
ctx.quadraticCurveTo(211, 201, 196, 188)
ctx.stroke();
ctx.fill();


// SCARF
ctx.strokeStyle = 'blue';
ctx.fillStyle = 'blue';
ctx.fillRect(167, 232, 60, 15);
ctx.fillRect(210, 232, 10, 300);
ctx.beginPath();
ctx.lineWidth = 1;
ctx.moveTo(210, 531)
ctx.lineTo(215, 538)
ctx.lineTo(220, 531)
ctx.stroke();
ctx.fill();
